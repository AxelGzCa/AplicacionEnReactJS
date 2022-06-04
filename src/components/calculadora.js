import React from 'react';
export default function Calculadora() {
  const [input, setInput] = React.useState({
    Numero1: "",
    Numero2: "",
  });
  const [result, setResult] = React.useState();
  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  const suma = function () {
    setResult((+input.Numero1) + (+input.Numero2));
  };
   const multiplicar = function () {
    setResult((+input.Numero1) * (+input.Numero2));
  };
  return (
    <div className='containerform'>
        <div className='group'>
            <div>
                <h2> Escriba dos números para sumar o multiplicar.</h2>
                <div>
                    <input className='form-control' onChange={handleInput} name="Numero1" value={input.Numero1} type="text"></input>
                    <br></br>
                    <input className='form-control' onChange={handleInput} name="Numero2" value={input.Numero2} type="text"></input>
                </div>
            </div>
            <br></br>
            <h3>Operacion a realizar:</h3>
            <div class="btn-group">
              <button type="submit" class="btn btn-outline-primary" onClick={suma}>Sumar</button>
              <h2>ㅤy / oㅤ</h2>
              <button type="submit" class="btn btn-outline-primary" onClick={multiplicar}>Multiplicar</button>
            </div>
            <div>
                <br></br> 
                <h4>El resultado es: <span> {result} </span> </h4> 
            </div>     
        </div>
    </div>
  );
}