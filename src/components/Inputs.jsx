export default function Inputs() {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input type="number" name="initialInvestment" />
        </div>

        <div>
          <label htmlFor="anualInvestment">ANUAL INVESTMENT</label>
          <input type="number" name="anualInvestment" />
        </div>
      </div>
      
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input type="number" name="expectedReturn" />
        </div>

        <div>
          <label htmlFor="duration">DURATION</label>
          <input type="number" name="duration" />
        </div>
      </div>
    </section>
  );
}
