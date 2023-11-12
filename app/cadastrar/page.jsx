'use client'
import { useState } from 'react';

const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com os dados do formulário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Criar Conta</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Seu Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">Senha</label>
              <input
                type="password"
                className="form-control"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="btn bg-black w-100 py-2 text-white mb-5">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastrar;
