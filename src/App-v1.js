import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [state, setState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
          setState(1);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={state >= 1 ? "active" : null}>1</div>
            <div className={state >= 2 ? "active" : null}>2</div>
            <div className={state >= 3 ? "active" : null}>3</div>
          </div>

          <p className="message">
            Step {state}: {messages[state - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={() => (state > 1 ? setState((s) => s - 1) : null)}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previus
            </button>
            <button
              onClick={() => (state < 3 ? setState((s) => s + 1) : null)}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
