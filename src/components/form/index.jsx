import "./style.css";

function Input({ type, placeholder, handleOnChange, value, className }) {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
