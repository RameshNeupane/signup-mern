import React from "react";
import NoLabelInput from "./NoLabelInput";

type LocationInputsProps = {
  location: {
    country: string;
    city: string;
  };
};

const LocationInputs: React.FC<LocationInputsProps> = ({ location }) => {
  return (
    <div className="w-full flex flex-col">
      <p>Location</p>
      <div className="w-full flex flex-row items-center justify-center gap-2">
        {/* country */}
        <NoLabelInput
          name="country"
          value={location.country}
          placeholder="country"
        />

        {/* city */}
        <NoLabelInput name="city" value={location.city} placeholder="city" />
      </div>
    </div>
  );
};

export default LocationInputs;
