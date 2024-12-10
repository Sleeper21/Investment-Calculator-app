
export default function Inputs({ onChangeInput, currentInputs }) {
 
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={currentInputs.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={currentInputs.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={currentInputs.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={currentInputs.duration}
            onChange={(event) =>
              onChangeInput("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
