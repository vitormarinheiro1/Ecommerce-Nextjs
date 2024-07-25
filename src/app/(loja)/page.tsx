'use client'
import CartaoProduto from "@/components/produto/CartaoProduto";
import Pagina from "@/components/template/Pagina";
import produtos from "@/data/constants/produtos";
import useCarrinho from "@/data/hooks/useCarrinho";


export default function Home() {
  const { numero, incrementar, decrementar } = useCarrinho()
  return (
    <Pagina>
      <div className="flex flex-wrap gap-5 justify-center">
        {produtos.map(produto => (
          <CartaoProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </Pagina>
  );
}
