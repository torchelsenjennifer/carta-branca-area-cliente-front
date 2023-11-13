'use client'
import Tatuagem from "./tatuagens/page";
import Destaque from "@/components/Destaque";

export default function Home() {
  return (
    <div className="relative">
      <img src="./cartaBranca.png" alt="Logo" className="img-fluid" />
	  <Destaque {...Tatuagem}/>
    </div>
  );
}
