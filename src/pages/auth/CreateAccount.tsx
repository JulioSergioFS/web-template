import { yupResolver } from "@hookform/resolvers/yup";
import { m } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Page } from "../../components/Page";
import { RHFInput } from "../../components/RHFInput";
import "../../styles/login.scss";

type FormValuesProps = {
  name: string;
  email: string;
  password: string;
};

export default function CreateAccount() {
  const navigate = useNavigate();

  const CreateAccountSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .email("O e-mail deve ser um endereço de e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatória"),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(CreateAccountSchema),
  });

  const { reset, handleSubmit, watch } = methods;
  const values = watch();

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log("conta criada com sucesso");
      localStorage.setItem("email", values.email);
      localStorage.setItem("name", values.name);
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      reset();
    }
  };

  return (
    <Page title="Login">
      <FormProvider {...methods}>
        <m.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="card"
        >
          <h2 className="title">Crie sua conta!</h2>
          <p className="subtitle">Preencha seus dados para continuar</p>
          <RHFInput name="name" placeholder="Nome" />
          <RHFInput name="email" placeholder="E-mail" />
          <RHFInput name="password" type="password" placeholder="Senha" />
          <button className="button-primary" type="submit">
            Criar Conta
          </button>
          <button
            className="button-secondary"
            onClick={() => navigate("/login")}
          >
            Voltar
          </button>
        </m.form>
      </FormProvider>
    </Page>
  );
}
