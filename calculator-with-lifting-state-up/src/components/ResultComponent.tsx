type ResultComponentProps =
{
  resultText: string;
  errorText: string;
};

export default function ResultComponent(
  { resultText, errorText }: ResultComponentProps
)
{
  return (
    <div>
      <h2>Резултат</h2>

      {errorText !== "" && (<p>{errorText}</p>)}

      {errorText === "" && resultText !== "" && (<p>{resultText}</p>)}
    </div>
  );
}