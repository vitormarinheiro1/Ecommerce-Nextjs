'use client'
import AreaItemCarrinho from "@/components/carrinho/AreaItemCarrinho";
import Pagina from "@/components/template/Pagina";
import useCarrinho from "@/data/hooks/useCarrinho";


export default function PaginaCarrinho() {

    const { itens, adicionar, remover } = useCarrinho()

    return (
        <Pagina>
            <div className="flex flex-col gap-5">
                {itens.map(item =>
                    <AreaItemCarrinho
                        key={item.produto.id}
                        item={item}
                        adicionar={(item) => adicionar(item.produto)}
                        remover={(item) => remover(item.produto)}
                    />
                )}
            </div>
        </Pagina>
    )
}