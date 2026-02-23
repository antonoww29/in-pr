type InputComponentProps =
{
  onNumber1Change: (value: string) => void;
  onNumber2Change: (value: string) => void;
  onOperationChange: (value: string) => void;
};

export default function InputComponent(
  {
    onNumber1Change,
    onNumber2Change,
    onOperationChange,
  }: InputComponentProps
)
{
  return (
    <div className="input-group">
      <input
        type="number"
        onChange={(e) => onNumber1Change(e.target.value)}/>

      <select
        onChange={(e) => onOperationChange(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input
        type="number"
        onChange={(e) => onNumber2Change(e.target.value)}/>
    </div>
  );
}
