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
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🦍</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [state, setState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevius() {
    return state > 1 ? setState((s) => s - 1) : null;
  }

  function handleNext() {
    return state < 3 ? setState((s) => s + 1) : null;
  }

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

          <StepMessage state={state}>
            {messages[state - 1]}
            <div className="buttons">
              <Button
                bgColor="#f312"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[state - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevius}
              children="Previus"
              emoji="👈"
            />
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              children="Next"
              emoji="👉"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ state, children }) {
  return (
    <div className="message">
      <h3>Step {state}: </h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children, emoji }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span>{emoji}</span>
      {children}
    </button>
  );
}
