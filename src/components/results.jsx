import { calculateInvestmentResults } from "../util/investment";

export default function Results() {
  return (
    <>
      <section id="result">
        <table className="input-group">
          <div>
            <thead>Year</thead>
            <tbody className="center">2022</tbody>
          </div>

          <div>
            <thead>Investment Value</thead>
            <tbody className="center">2022</tbody>
          </div>

          <div>
            <thead>Interest (Year)</thead>
            <tbody className="center">2022</tbody>
          </div>

          <div>
            <thead>Total Interest</thead>
            <tbody className="center">2022</tbody>
          </div>

          <div>
            <thead>Invested Capital</thead>
            <tbody className="center">2022</tbody>
          </div>
        </table>
      </section>
    </>
  );
}
