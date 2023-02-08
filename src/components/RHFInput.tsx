import { useFormContext } from "react-hook-form";

export function RHFInput({
  name,
  type,
  options,
  placeholder,
}: {
  name: string;
  type?: string;
  options?: any;
  placeholder: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        type={type || "text"}
        placeholder={placeholder}
        {...register(name, options)}
      />
      {errors && <p style={{ color: "red" }}>{errors[name]?.message}</p>}
    </>
  );
}
