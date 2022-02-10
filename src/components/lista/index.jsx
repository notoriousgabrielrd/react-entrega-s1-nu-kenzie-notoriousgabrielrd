import "./style.css";
import TrashDefault from "../../icons/TrashDefault.png";
import TrashHover from "../../icons/TrashHover.png";
import ButtonLista from "./buttonLista";
import NoCard from "../../icons/NoCard.png";
// filtros aqui

const Lista = ({ cadastro, removeItem }) => {
  return (
    <div className="div-listaPai">
      {cadastro.length === 0 ? (
        <>
          <h2>Voce ainda nao possui nenhum lancamento</h2>
          <img src={NoCard} alt="card" />
        </>
      ) : (
        cadastro.map((value) => (
          // card aqui
          <div key={value.id} className="div-1-lista">
            <div className="div-2-lista">
              <h3>{value.descricao}</h3>
              <p>{value.tipoDeValor}</p>
            </div>

            <div className="div-3-lista">
              <p>R$ {value.valor},00</p>
              <ButtonLista
                img={TrashHover}
                alt="lixo"
                callBack={removeItem}
                id={value.id}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Lista;
