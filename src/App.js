import './App.css';
import { useState } from "react"
import Input from './components/form';
import Select from './components/form/select';
import SubmitButton from './components/form/submitButton';
import Lista from './components/lista';
import CardPreco from "./components/precoTotal/preco"
import NuKenzie from "./icons/NuKenzie.png"




function App() {
  const [cadastro, setCadastro] = useState([]) // global
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [tipo, setTipo] = useState("Entrada")
  const [id, setId] = useState(0)
  const [filtered, setFiltered] = useState()
  const [isFiltered, setIsFiltered] = useState(false)
  const [isListed, setIsListed] = useState(false)
  const [preco, setPreco] = useState(0)
  const [transition, setTransition] = useState([])

  const filterEntrada = () => {
    const result = cadastro.filter((value) => value.tipoDeValor === "Entrada")
    setFiltered(result)
  }



  const filterDespesa = () => {
    const result = cadastro.filter((value) => value.tipoDeValor === "Despesa")
    setFiltered(result)
  }

  const handleOnChange = (e) => {

    e.preventDefault()
    setId(id + 1)
    if (tipo !== "") {
      setIsListed(true)
      setCadastro([...cadastro, { descricao: descricao, valor: valor, tipoDeValor: tipo, id: id }])
    }

    const result = cadastro.map((value) =>
      value.valor !== "" && (setPreco(preco + parseInt(value.valor)))
    )


    console.log("result:", result)
    console.log("preco:", preco)
    cadastro.length >= 0 ? (setIsListed(true)) : (setIsListed(false))
  }
  const removeItem = (e) => {
    e.preventDefault();
    e.currentTarget.parentNode.parentNode.innerHTML = ""
    const newCadastro = cadastro.filter((value) =>
      value.id !== e.currentTarget.id)
    setCadastro(newCadastro)
    cadastro.length === 1 ? (setIsListed(false)) : (setIsListed(true))
  }




  return (
    <div className="App">
      {/* <div className="App-header"> */}
      <header>
        <nav className='menu-nav'>
          <img className='img-NuKenzie' src={NuKenzie} alt="Nukenzie" />

          <button className=' button-nav' onClick={(evt) => setIsFiltered(false)}>Inicio</button>
        </nav>
      </header>
      <main>
        <div className='form-preco'>
          <form onSubmit={handleOnChange} className='formulario-main' >

            <div className='div-paiForm'>
              <div className='descricao'>

                <label>Descricao</label>
                <Input className="input-desc" type="text" placeholder="digite aqui sua descricao" handleOnChange={(evt) => { setDescricao(evt.target.value) }} value={descricao} />
                <p className='p-ex'>ex: Compra de roupas</p>
              </div>

              <div className='valores'>
                <div className='valor'>
                  <label>Valor</label>
                  <Input className="input-valores" type="number" placeholder="R$" handleOnChange={(evt) => { setValor(evt.target.value) }} value={valor} />
                </div>
                <div className='tipo'>
                  <label>Tipo de Valor</label>
                  <Select className="input-valores" name="Selecione um tipo" handleOnChange={(evt) => { setTipo(evt.target.value) }} value={tipo} />
                </div>
              </div>

              <SubmitButton className="submit-button" type="submit" text="Inserir valor" />

            </div>
          </form>
          {
            isListed && <CardPreco boolean={isListed} result={preco} />
          }
        </div>


        {/* passar buton para lista */}
        <div className='resumo-listas' >
          <span className='titulo-listas' >
            <h2 className='h2-resumo'>Resumo financeiro</h2>
            <div className='filter'>
              <button id='todos' className='button-filter' onClick={(evt) => setIsFiltered(false)}>Todos</button>
              <button className='button-filter' onClick={(evt) => { evt.preventDefault(); filterEntrada(); setIsFiltered(true) }}>Entradas</button>
              <button className='button-filter' onClick={(evt) => { evt.preventDefault(); filterDespesa(); setIsFiltered(true) }}>Despesas</button>
            </div>
          </span>

          {
            isFiltered ? (<Lista cadastro={filtered} removeItem={removeItem} />) : (<Lista cadastro={cadastro} removeItem={removeItem} />)
          }

        </div>
      </main>
    </div >
  );
}

export default App;
