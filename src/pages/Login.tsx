import { useState } from "react";
import "../styles/login.scss";

export default function Login() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <h2>Bem-vindo!</h2>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <p className="highlight-text">Esqueci a senha</p>
        <button>Entrar</button>
        <p>
          Não tem uma conta? <b className="highlight-text">Criar conta</b>
        </p>
      </div>
    </div>
  );
}
