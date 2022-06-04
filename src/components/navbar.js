import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/calculadora">Calculadora Basica</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/calculadoragrados">Conversor de Grados</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/formulario">Formulario</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar