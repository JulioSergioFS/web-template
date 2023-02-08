import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Page } from "../../components/Page";
import { RHFInput } from "../../components/RHFInput";
import "../../styles/login.scss";

type FormValuesProps = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("O e-mail deve ser um endereço de e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatório"),
  });

  const defaultValues = {
    email: localStorage.getItem("login") || undefined,
    password: undefined,
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch (error) {
      reset();
    }
  };

  return (
    <Page title="Login">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="card">
          <h2 className="title">Bem-vindo!</h2>
          <RHFInput name="email" placeholder="E-mail" />
          <RHFInput name="password" type="password" placeholder="Senha" />
          <p
            className="highlight-text"
            onClick={() => navigate("/forgot-password")}
          >
            Esqueci minha senha
          </p>
          <button className="button-primary" type="submit">
            Entrar
          </button>
          <p>
            Não tem uma conta?{" "}
            <b
              className="highlight-text"
              onClick={() => navigate("/create-account")}
            >
              Criar conta
            </b>
          </p>
        </form>
      </FormProvider>
    </Page>
  );
}
