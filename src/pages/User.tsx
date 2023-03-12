import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Page } from "../components/Page";
import { RHFInput } from "../components/RHFInput";
import useSnackbar from "../hooks/useSnackbar";
import "../styles/pages/user.scss";

type FormValuesProps = {
  name: string;
  email: string;
  password: string;
};

export default function User() {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const UserSchema = Yup.object().shape({
    name: Yup.string().required("Name is mandatory"),
    email: Yup.string()
      .email("E-mail must be a valid e-mail address")
      .required("E-mail is mandatory"),
    password: Yup.string().required("Password is mandatory"),
  });

  const defaultValues = {
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UserSchema),
    defaultValues,
  });

  const { reset, handleSubmit, watch } = methods;
  const values = watch();

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch (error) {
      reset();
    }
  };

  return (
    <Page title="User">
      <FormProvider {...methods}>
        <h3 className="main-title">Edit User</h3>
        <div className="user">
          <div className="user_preview card">
            <div className="user-avatar user_preview_avatar">
              {values.name.trim()[0].toUpperCase()}
            </div>
            <h4>{values.name}</h4>
            <p>{values.email}</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="user_form card">
            <RHFInput name="name" placeholder="Nome" />
            <div className="user_form_input-group">
              <RHFInput
                name="email"
                placeholder="E-mail"
                className="half-width"
              />
              <RHFInput
                name="password"
                type="password"
                placeholder="Password"
                className="half-width"
              />
            </div>
            <button className="button-primary small-width" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </FormProvider>
    </Page>
  );
}
