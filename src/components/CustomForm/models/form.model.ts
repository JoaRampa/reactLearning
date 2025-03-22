import {z} from 'zod';//ayuda a crear un esquema y hace validaciones por si mismo

export const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"), //declara tipo de dato, cant min de chars y msg de error
  email: z.string().email("Correo inválido").min(1,"El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword, { //el metodo compara si el password y confirm password son iguales
  message: "Las contraseñas son diferentes", //si no se cumple la condición, muestra el mensaj
  path: ["confirmPassword"] //el msg de arriba pertenece a este campo
})

export type FormValues = z.infer<typeof schema> //inferencia de tipos, genera un tipado de ts 