'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Avaliacoes() {
    const params = useParams()
    const [profissional, setProfissional] = useState({})
    const [cliente, setCliente] = useState({})
    const [avaliacao, setAvaliacao] = useState({})

    useEffect(() => {
        async function getAvaliacao() {
            try {
                const avaliacaoRota = await fetch(`http://localhost:3004/avaliacoes/${params.id}`)
                const avaliacao = await avaliacaoRota.json()
                const profissionalRota = await fetch(`http://localhost:3004/profissionais/${avaliacao.profissional_id}`)
                const profissional = await profissionalRota.json()
                const clienteRota = await fetch(`http://localhost:3004/clientes/${avaliacao.cliente_id}`)
                const cliente = await clienteRota.json()

                setProfissional({
                    id: profissional.id,
                    nome: profissional.nome,
                    CPF: profissional.CPF,
                    contato: profissional.contato,
                    dataNasc: profissional.dataNasc,
                    especialidade: profissional.especialidade,
                    imagem: profissional.imagem,
                    soma: profissional.soma,
                    num: profissional.num
                })

                setCliente({
                    id: cliente.id,
                    nome: cliente.nome,
                    email: cliente.email,
                    senha: cliente.senha
                })

                setAvaliacao({
                    estrelas: avaliacao.estrelas,
                    comentario: avaliacao.comentario,
                    cliente_id: avaliacao.cliente_id,
                    profissional_id: avaliacao.profissional_id,
                    data: avaliacao.data,
                    id: avaliacao.id
                })
            } catch (error) {
                console.log(error);
            }
        }
        getAvaliacao()
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <Image
                    src={profissional.imagem}
                    className="card-img-top"
                    alt="profissional"
                />
                {/* <div className="card-body">
                    <h5 className="card-title">{cliente.titulo}</h5>
                    <p className="card-text">{props.profissional.nome}</p>
                    <p className="small">{props.profissional.especialidade}</p>
                </div>
                {clienteId && (
                    <div className="ms-2 mb-2">
                        <Estrelas
                            soma={props.profissional.soma}
                            num={props.profissional.num}
                        />
                        <div className="float-end me-2">
                            <i className="bi bi-chat-dots-fill text-primary me-2" style={{ cursor: 'pointer' }} title="Ver Comentários"></i>
                            <Link href={"/avaliar/" + props.profissional.id}>
                                <i className="bi bi-patch-plus text-danger fs-3 me-2" style={{ cursor: 'pointer' }} title="Adicionar Comentários"></i>
                            </Link>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    )
}