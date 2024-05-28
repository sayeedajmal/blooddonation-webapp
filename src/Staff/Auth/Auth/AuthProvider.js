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
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  /* FOR LOGIN */
  const login = async (email, password) => {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;
        localStorage.setItem("token", accessToken);
        setToken(accessToken);

        navigate("/dashboard");
      } else {
        const errorText = await response.text(); // capture error message
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
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/LoginStaff");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, fetchUserDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};
