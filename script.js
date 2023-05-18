function App() {
  const [calculation, setCalculation] = React.useState("");
  const [result, setResult] = React.useState(""); // Nueva variable de estado para el resultado

  const clearDisplay = () => {
    setCalculation("");
    setResult("");
  };

  const handleNumberClick = (event) => {
    const number = event.target.textContent;
    if (result !== "") {
      setCalculation(number);
      setResult("");
    } else {
      setCalculation((prevCalculation) => prevCalculation + number);
    }
  };

  const handleOperatorClick = (event) => {
    const operator = event.target.textContent;
    if (result !== "") {
      setCalculation(result + operator);
      setResult("");
    } else {
      setCalculation((prevCalculation) => prevCalculation + operator);
    }
  };

  const handleEqualsClick = () => {
    let finalResult;
    try {
      finalResult = eval(calculation);
      if (!Number.isFinite(finalResult)) {
        finalResult = "Error";
      }
    } catch (error) {
      finalResult = "Error";
    }
    setCalculation(finalResult.toString());
    setResult(finalResult.toString()); // Guardar el resultado en la nueva variable de estado
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="padButton dis display" id="display"><span className="display-text">{calculation}</span></div>
        <div className="padButton ac" onClick={clearDisplay}>
          AC
        </div>
        <div className="padButton div op" onClick={handleOperatorClick}>
          /
        </div>
        <div className="padButton mul op" onClick={handleOperatorClick}>
          x
        </div>
        <div className="padButton seven" onClick={handleNumberClick}>
          7
        </div>
        <div className="padButton eight" onClick={handleNumberClick}>
          8
        </div>
        <div className="padButton nine" onClick={handleNumberClick}>
          9
        </div>
        <div className="padButton sub op" onClick={handleOperatorClick}>
          -
        </div>
        <div className="padButton four" onClick={handleNumberClick}>
          4
        </div>
        <div className="padButton five" onClick={handleNumberClick}>
          5
        </div>
        <div className="padButton six" onClick={handleNumberClick}>
          6
        </div>
        <div className="padButton add op" onClick={handleOperatorClick}>
          +
        </div>
        <div className="padButton one" onClick={handleNumberClick}>
          1
        </div>
        <div className="padButton two" onClick={handleNumberClick}>
          2
        </div>
        <div className="padButton three" onClick={handleNumberClick}>
          3
        </div>
        <div className="padButton equal" onClick={handleEqualsClick}>
          =
        </div>
        <div className="padButton zero" onClick={handleNumberClick}>
          0
          </div>
        <div className="padButton point" onClick={handleNumberClick}>
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));