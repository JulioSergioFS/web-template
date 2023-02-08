import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";
import "../../styles/login.scss";

export default function CreateAccount() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Page title="Login">
      <div className="card">
        <h2 className="title">Crie sua conta!</h2>
        <p className="subtitle">Preencha seus dados para continuar</p>
        <input type="name" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button className="button-primary">Criar Conta</button>
        <button className="button-secondary" onClick={() => navigate("/login")}>
          Voltar
        </button>
      </div>
    </Page>
  );
}
