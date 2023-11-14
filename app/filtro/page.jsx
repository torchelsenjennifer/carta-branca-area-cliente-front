"use client";
import ItemTatuagem from "@/components/ItemTatuagem";
import Pesquisa from "@/components/Pesquisar";
import { useEffect, useState } from "react";

export default function Filtro() {
  const [tatuagens, setTatuagens] = useState([]);

  useEffect(() => {
    async function getTatuagens() {
      const response = await fetch("http://localhost:3004/tatuagens");
      const data = await response.json();
      setTatuagens(data);
    }
    getTatuagens();
  }, []);

  function filtrarTatuagens(data) {
    async function getTatuagens() {
      const response = await fetch(
        "http://localhost:3004/tatuagens?tipo_like=" + data.pesq
      );
      const dados = await response.json();
      getTatuagens(dados);
    }
    getTatuagens();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0 mb-20">
        <div className="flex justify-end px-0">
          <Pesquisa filtrarTatuagens={filtrarTatuagens} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          {tatuagens.map((tatuagem) => (
            <ItemTatuagem key={tatuagem.id} tatuagem={tatuagem} />
          ))}
        </div>
      </div>
    </>
  );
}
