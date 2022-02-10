import "./style.css";

const CardPreco = ({ boolean, result }) => {
  return (
    boolean && (
      <div className="div-preco">
        <h3>Preco Total:</h3>
        <span>{result}</span>
      </div>
    )
  );
};

export default CardPreco;
