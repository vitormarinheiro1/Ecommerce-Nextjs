'use client'
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";


export default function Home() {
  const { numero, incrementar, decrementar } = useCarrinho()
  return (
    <Pagina>
      <div>Início: {numero}</div>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={decrementar}>decrementar</button>
    </Pagina>
  );
}
