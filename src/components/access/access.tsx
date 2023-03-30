import { useState } from "react";
import { Login } from "../login/login";
import { Register } from "../register/register";
import "./access.scss";

export function Access() {
  const [toChange, setIsChanged] = useState<boolean | null>(null);

  const handleChange = (boolean: boolean) => {
    setIsChanged(boolean);
    if (boolean === toChange) {
      setIsChanged(null);
    } else {
      setIsChanged(boolean);
    }
  };

  return (
    <>
      <img className="mainLogo" src="../img/AccesImage.png" alt="MainImg" />
      <button className="button button-1" onClick={() => handleChange(true)}>
        I HAVE AN ACCOUNT
      </button>
      <button className="button button-2" onClick={() => handleChange(false)}>
        I'M NEW HERE
      </button>
      {toChange === true && <Login />}
      {toChange === false && <Register />}
    </>
  );
}

export default Access;
