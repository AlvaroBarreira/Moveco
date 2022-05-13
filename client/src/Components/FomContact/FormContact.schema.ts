import * as Yup from "yup";

export const FormContactSchema = Yup.object({
    email: Yup.string()
        .required("*Campo Requerido")
        .email("Por favor ingrese un correo electrónico valido")
        .max(30, "*30 caracteres máximo"),
    username: Yup.string()
        .required("*Campo Requerido")
        .max(30, "*30 caracteres máximo"),
    description: Yup.string()
        .required("*Campo Requerido")
        .max(30, "*30 caracteres máximo")
})