import { useMemo, useState } from "react";
import InputComponent from "./components/InputComponent";
import ResultComponent from "./components/ResultComponent";
import "./App.css";

function App()
{
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("+");

  const { resultText, errorText } = useMemo(() =>
  {
    if (number1 === "" || number2 === "")
    {
      return { resultText: "", errorText: "Въведи и двете числа." };
    }

    const a = Number(number1);
    const b = Number(number2);

    if (Number.isNaN(a) || Number.isNaN(b))
    {
      return { resultText: "", errorText: "Грешка: невалидни числа." };
    }

    if (operation === "/" && b === 0)
    {
      return { resultText: "", errorText: "Грешка: деление на 0 е невъзможно!" };
    }

    let r = 0;

    if (operation === "+")
    {
      r = a + b;
    }
    else if (operation === "-")
    {
      r = a - b;
    }
    else if (operation === "*")
    {
      r = a * b;
    }
    else
    {
      r = a / b;
    }

    return { resultText: String(r), errorText: "" };
  }, [number1, number2, operation]);

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>

      <InputComponent
        onNumber1Change={setNumber1}
        onNumber2Change={setNumber2}
        onOperationChange={setOperation}
      />

      <ResultComponent
        resultText={resultText}
        errorText={errorText}
      />
    </div>
  );
}

export default App;
