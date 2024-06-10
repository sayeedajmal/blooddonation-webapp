import { jwtDecode } from "jwt-decode";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosConfig";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isConnected, setIsServerConnected] = useState(false);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const checkServerHealth = async () => {
      try {
        const response = await axios.get(`${apiUrl}/actuator/health`);
        setIsServerConnected(response.status === 200);
      } catch (error) {
        setIsServerConnected(false);
      }
    };

    checkServerHealth();
  }, [apiUrl]);
  /* FOR LOGIN */
  const login = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        const data = response.data;
        const accessToken = data.access_token;
        localStorage.setItem("token", accessToken);
        setToken(accessToken);

        navigate("/dashboard");
      } else {
        const errorText = response.statusText;
        console.error(`Login failed: ${response.status} - ${errorText}`);
        throw new Error(`Login failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  /* FOR FETCHING THE DATA OF STAFF */
  const fetchUserDetails = useCallback(async () => {
    try {
      if (!token) throw new Error("No token available");
      const decodedToken = jwtDecode(token);
      const email = decodedToken.sub;
      const response = await axios.get(
        `${apiUrl}/staff/findStaffByEmail?email=${email}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  }, [apiUrl, token]);

  useEffect(() => {
    if (token && !user) {
      fetchUserDetails();
    }
  }, [token, fetchUserDetails, user]);

  /* LOGOUT */
  const logout = async () => {
    try {
      if (!token) throw new Error("No User Signed");
      await axios.post(`${apiUrl}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      navigate("/LoginStaff");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, fetchUserDetails, isConnected }}
    >
      {children}
    </AuthContext.Provider>
  );
};
