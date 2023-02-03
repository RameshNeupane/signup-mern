import React, { useState } from "react";

const RememberMe = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex gap-1 items-center justify-start w-max">
      <input
        type="checkbox"
        name="remember"
        id="remember"
        value=""
        checked={checked}
        onChange={(e) => setChecked((prev) => !prev)}
        className=" w-5 h-5 rounded-sm border-none dark:bg-cyan-600"
      />
      <label htmlFor="remember">Remember Me</label>
    </div>
  );
};

export default RememberMe;
