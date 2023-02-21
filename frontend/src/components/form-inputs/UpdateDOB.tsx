import { parseISO } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type UpdateDOBProps = {
  dob: string;
};

const UpdateDOB: React.FC<UpdateDOBProps> = ({ dob }) => {
  const [dobInput, setDobInput] = useState(parseISO(dob) || new Date());
  return (
    <div className="w-full flex flex-col">
      <p>Date of Birth (day-month-year)</p>
      <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={dobInput}
        onChange={(date) => setDobInput(date as Date)}
        className="dark:bg-slate-600 rounded-md w-full h-12 outline-none border-2 border-transparent focus-within:border-white pl-2 text-base"
        placeholderText="dd-MM-yyyy"
      />
    </div>
  );
};

export default UpdateDOB;
