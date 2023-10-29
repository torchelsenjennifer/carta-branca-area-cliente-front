import Link from "next/link";

export default function Titulo() {
  return (
    <nav class="navbar bg-dark">
      <div className="row container-fluid">
        <div className="col">
          <Link className="navbar-brand text-white" href="/">
            <img
              src="./logoCartaBranca.png"
              alt="Bootstrap"
              width="60"
              height="48"
              className="d-inline-block align-text-top float-start"
            />
            <h3 className="float-start mt-3 ms-2">Estabelecimento Carta Branca</h3>
          </Link>
        </div>
		<div className="col text-white">
			<div className="input-group mb-3 mt-2">
				<input type="text" className="form-control" placeholder="Profissional" aria-label="Recipient's username" aria-describedby="button-addon2" />
				<button className="btn bg-danger" type="button" id="button-addon2">Pesquisar</button>
			</div>
		</div>
		<div className="col">
			<Link href="/login" className="text-white">
				<h4 className="float-end">Identifique-se</h4>
				<i class="bi bi-person-fill-up text-white ms-2 float-end fs-4"></i>
			</Link>
		</div>
      </div>
    </nav>
  );
}
