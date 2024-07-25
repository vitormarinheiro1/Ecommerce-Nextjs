import Produto from "@/data/model/Produto"
import Image from "next/image"

export interface CartaoProdutoProps {
    produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { nome, descricao, preco, imagem } = props.produto
    return (
        <div className="flex flex-col w-72">
            <div className="relative w-72 h-52">
                <Image src={imagem} alt={nome} fill />
            </div>
        </div>
    )
}