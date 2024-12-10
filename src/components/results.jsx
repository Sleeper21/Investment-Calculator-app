import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ currentInputs, initialInvestment }) {

const result = calculateInvestmentResults(currentInputs);
console.log(result)

  return (
      
        <table id="result">
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>

            <tbody>
              {result.map(entry => {
                const totalInterest = entry.valueEndOfYear - entry.annualInvestment * entry.year - initialInvestment;
                const totalAmountInvested = entry.valueEndOfYear - totalInterest;
              
                return <tr key={entry.year}>
                  <td>{entry.year}</td>
                  <td>{formatter.format(entry.valueEndOfYear)}</td>
                  <td>{formatter.format(entry.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              })}
            </tbody>            
        </table>      
  );
}
