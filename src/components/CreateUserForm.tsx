import { yupResolver } from "@hookform/resolvers/yup";
import { m } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useSnackbar from "../hooks/useSnackbar";
import { createUser } from "../redux/slices/user";
import { useDispatch } from "../redux/store";
import "../styles/login.scss";
import { RHFInput } from "./RHFInput";

type FormValuesProps = {
  name: string;
  email: string;
  password: string;
};

export default function CreateUserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openSnackbar } = useSnackbar();

  const CreateUserSchema = Yup.object().shape({
    name: Yup.string().required("Name is mandatory"),
    email: Yup.string()
      .email("E-mail must be a valid e-mail address")
      .required("E-mail is mandatory"),
    password: Yup.string().required("Password is mandatory"),
  });

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(CreateUserSchema),
  });

  const { reset, handleSubmit, watch } = methods;
  const values = watch();

  const onSubmit = async (data: FormValuesProps) => {
    try {
      dispatch(createUser(values));
      openSnackbar({ type: "success", message: "Conta criada com sucesso" });
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      reset();
    }
  };

  return (
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
        <button className="button-secondary" onClick={() => navigate("/login")}>
          Voltar
        </button>
      </m.form>
    </FormProvider>
  );
}
