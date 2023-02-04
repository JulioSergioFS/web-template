import { useState } from "react";
import { Page } from "../components/Page";
import "../styles/login.scss";

export default function Login() {
  const [count, setCount] = useState(0);

  return (
    <Page title="Login">
      <div className="card">
        <h2 className="title">Bem-vindo!</h2>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <p className="highlight-text">Esqueci minha senha</p>
        <button>Entrar</button>
        <p>
          Não tem uma conta? <b className="highlight-text">Criar conta</b>
        </p>
      </div>
    </Page>
  );
}
