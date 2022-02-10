import "./style.css";

function Select({ name, handleOnChange, value, className }) {
  return (
    <select
      className={className}
      name={name}
      value={value}
      onChange={handleOnChange}
    >
      <option value="">Selecione um tipo</option>
      <option value="Entrada">Entrada</option>
      <option value="Despesa">Despesa</option>
    </select>
  );
}

export default Select;
