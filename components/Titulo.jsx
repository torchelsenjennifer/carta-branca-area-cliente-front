"use client";
import Link from "next/link";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";

export default function Titulo() {
  const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext);

  function logout() {
    if (confirm("Confirma saída do sistema?")) {
      mudaId(null);
      mudaNome("");
    }
  }

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" href="/">
          <img
            src="./logoCartaBranca.png"
            alt="Bootstrap"
            width="60"
            height="48"
            className="d-inline-block align-text-top float-start"
          />
          <h3 className="float-start mt-2 ms-2">Studio Carta Branca</h3>
        </Link>
        <Link className="navbar-brand text-white" href="/profissionais">
          Profissionais
        </Link>
        <Link className="navbar-brand text-white" href="/tatuagens">
          Tatuagens
        </Link>

        {clienteNome == "" ? (
          <Link href="/login" className="text-white">
            <i className="bi bi-person-fill-up text-white ms-2 me-2 float-end fs-4"></i>
            <h4 className="float-end">Identifique-se</h4>
          </Link>
        ) : (
          <div className="text-white float-end">
            <i className="bi bi-person-fill-down text-white ms-2 me-2 float-end fs-4"></i>
            <h4 className="float-start">
              {clienteNome}{" "}
              <span onClick={logout} style={{ cursor: "pointer" }}>
                (sair)
              </span>
            </h4>
          </div>
        )}
      </div>
    </nav>
  );
}
