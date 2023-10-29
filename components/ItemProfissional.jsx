export default function ItemProfissional(props){
	return(
		<div className="col">
			<div className="card">
				<img src={props.profissional.imagem} className="card-img-top" alt="profissional"/>
				<div className="card-body">
					<h5 className="card-title">{props.profissional.titulo}</h5>
					<p className="card-text">{props.profissional.nome} - {props.profissional.especialidade}</p>
					<p className="small">{props.profissional.especialidade}</p>
				</div>
    		</div>
		</div>
	)
}