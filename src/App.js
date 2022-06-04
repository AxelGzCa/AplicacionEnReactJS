import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadora from "./components/calculadora";
import CalculadoraGrados from "./components/calculadoragrados";
import Formulario from "./components/formulario";
import Navbar from "./components/navbar";
export function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar></Navbar>
                    <div class="nav-search">
                        <Routes>
                            <Route path="/Calculadora" element={<Calculadora />} />
                            <Route path="/CalculadoraGrados" element={<CalculadoraGrados />} />
                            <Route path="/Formulario" element={<Formulario />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}