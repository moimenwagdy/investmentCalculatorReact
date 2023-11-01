import { formatter } from "../../util/investment";
export default function Table({ finalArr }) {
  const initialInvestment =
    finalArr[0].valueEndOfYear -
    finalArr[0].interest -
    finalArr[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investement Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {finalArr.map((e) => {
          const totalInterests =
            e.valueEndOfYear - e.annualInvestment * e.year - initialInvestment;
          const total = e.valueEndOfYear - totalInterests;
          return (
            <tr className="center" key={Math.random()}>
              <td>{e.year}</td>
              <td>{formatter.format(e.valueEndOfYear)}</td>
              <td>{formatter.format(e.interest)}</td>
              <td>{formatter.format(totalInterests)}</td>
              <td>{formatter.format(total)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
