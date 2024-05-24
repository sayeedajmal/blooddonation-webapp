import React, { Link } from "react";

let serviceForm = ["Donor", "MedicalHistory", "Staff"];
const DonorHandle = () => {
  return (
    <>
      <div className="flex justify-center items-center p-6 rounded border-red-500">
        <ul className="flex  justify-evenly w-5/12">
          {serviceForm.map((item, index) => (
            <li key={index}>
              <Link to={`/${item}`}>
                <button className="px-5 py-3 text-white rounded-full m-2 bg-slate-700">
                  {item}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default DonorHandle;
