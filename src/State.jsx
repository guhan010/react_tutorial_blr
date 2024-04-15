import React, { useState } from "react";

const State = () => {
  const [charge, setCharge] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  const drain10 = () => {
    if (charge <= 0) {
      alert("battery over bye bye");
    } else {
      setCharge(charge - 10);
    }
  };
  const drain20 = () => {
    if (charge <= 0) {
      alert("battery over bye bye");
    } else {
      setCharge((value) => value - 20);
    }
  };
  const charge10 = () => {
    if (charge <= 100) {
      alert("battery full, enjoy");
    } else {
      setCharge(charge + 10);
    }
  };
  const chargephone = () => {
    setIsCharging(!isCharging);
  };

  return (
    <div>
      <h1>Battery Percentage: {charge}% </h1>
      <button onClick={drain10}>Use battery 10%</button>
      <button onClick={drain20}>Use battery 20%</button>
      <button onClick={charge10}>Charge battery 10%</button>

      <h2>Is charging: {isCharging ? "Yes" : "No"}</h2>
      <button onClick={chargephone}>
        {isCharging ? "Unplug charge" : "Charge Phone"}
      </button>
    </div>
  );
};

export default State;
