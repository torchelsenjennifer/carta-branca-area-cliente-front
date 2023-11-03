import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ClienteContext } from "@/contexts/cliente";

function Protecao({ children }) {

const { clienteNome } = useContext(ClienteContext);
  const router = useRouter();

  if (clienteNome == "") {
    router.push("/login");
    return null;
  }

  return children;
}

export default Protecao;
