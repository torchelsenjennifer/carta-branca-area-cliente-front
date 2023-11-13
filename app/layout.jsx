import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Titulo from "@/components/Titulo";
import ClienteProvider from "@/contexts/cliente";
import Footer from "@/components/Footer";
import Destaque from "@/components/Destaque";
import Tatuagem from "./tatuagens/page";

export const metadata = {
  title: "Carta Branca",
  description: "Estabelecimento Carta Branca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ClienteProvider>
          <Titulo />
          {children}
        </ClienteProvider>
		<Destaque {...Tatuagem}/>
		<Footer/>
      </body>
    </html>
  );
}
