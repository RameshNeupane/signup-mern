import React, { useState } from "react";
import Radio from "./Radio";

type RadioGroupProps = {
  name: string;
  checked: string;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ name, checked }) => {
  const [radioChecked, setRadioChecked] = useState(() =>
    checked.length > 0 ? checked : "male"
  );

  return (
    <div className=" w-full flex gap-4">
      <Radio
        name={name}
        radioChecked={radioChecked}
        setRadioChecked={setRadioChecked}
        value="male"
      />
      <Radio
        name={name}
        radioChecked={radioChecked}
        setRadioChecked={setRadioChecked}
        value="female"
      />
      <Radio
        name={name}
        radioChecked={radioChecked}
        setRadioChecked={setRadioChecked}
        value="other"
      />
    </div>
  );
};

export default RadioGroup;
