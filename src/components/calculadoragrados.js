import React from 'react';
export default function CalculadoraGrados() {
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
  const Celsius = function () {
    setResult(((+input.Numero1)-32) * 0.5556+'C');
  };
   const Fahrenheit = function () {
    setResult(((+input.Numero1)*1.8) +32 +'F');
  };
  return (
    <div>
        <div className='containerform'>
            <div className='group'>
                <h2>Escriba la temperatura a convertir.</h2>
                <div>
                    <input className='form-control' onChange={handleInput} name="Numero1" value={input.Numero1} type="text"></input>
                </div>
            </div>
            <br></br>
            <h3>Operacion a realizar:</h3>
            <div class="btn-group">
              <button type="submit" class="btn btn-outline-primary" onClick={Celsius}>Celsius</button>
              <h2>ㅤy / oㅤ</h2>
              <button type="submit" class="btn btn-outline-primary" onClick={Fahrenheit}>Fahrenheit</button>
            </div>
            <div> 
              <br></br> 
              <h4>El resultado es: <span> {result} </span> </h4> 
            </div>
        </div>
    </div> 
  );
}