import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

export const INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInputs] = useState(INPUTS);

  function handleChangeValue(inputIdentifier, newValue) {
    setUserInputs((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: +newValue, //The + before NewValue is to force the value to be stored an number instead of a string. because in javascript every <input> values get stored as strings, even if we set it as type=number.
      };
    });
  }

  //Check if values entered are valid
  const inputIsValid = userInput.duration >= 1;
  
  return (
    <>
      <Header />
      <Inputs currentInputs={userInput} onChangeInput={handleChangeValue}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results currentInputs={userInput} initialInvestment={userInput.initialInvestment}/>}
    </>    
  )
}

export default App
