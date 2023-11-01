import Header from "./componants/header/Header";
import Input from "./componants/Input/Input";
import Table from "./componants/Table/Table";
import { calculateInvestmentResults } from "./util/investment.js";
import { useState } from "react";
let initiaObj = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  let [valuesObj, setValues] = useState(initiaObj);

  const isValid = valuesObj.duration > 0;
  function changeHandler(key, value) {
    setValues((preVal) => {
      return { ...preVal, [key]: +value };
    });
  }

  const results = calculateInvestmentResults(valuesObj);

  return (
    <>
      <Header />
      <Input onchangeHandler={changeHandler} values={valuesObj} />
      {!isValid && <p className="center">INSERT VALUES GREATER THAN ZERO</p>}
      {isValid && <Table finalArr={results} />}
    </>
  );
}

export default App;
