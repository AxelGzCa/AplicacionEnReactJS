import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellidos: "",
      telefono: "",
      correo: "",
      comentarios: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("Se enviaron los datos de : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="margen">
        <h2 className="contenido">Formulario de registro</h2>
        <form>
          <fieldset>
            <p>Favor de rellenar todo los campos</p>
            <div class="contenido-formulario">
              <div class="formula">
                <label>Nombre:</label><br></br>
                <div>
                <input class="form-control" type="text" placeholder="..." />
                </div>
              </div>
              <div class="formula">
                <label>Teléfono:</label><br></br>
                <input class="form-control" type="tel" placeholder="..." />
              </div>
            </div>
            <div class="formula">
                <label>Correo Electronico:</label><br></br>
                <input class="form-control" type="text" placeholder="..."/>
              </div>
            <div class="formula">
              <label class="centrartext">Comentarios:</label><br></br>
              <textarea class="form-control"></textarea>
            </div>
            <div class="flex-boton"><br></br>
              <button type="submit" class="btn btn-outline-primary">Enviar</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Formulario;