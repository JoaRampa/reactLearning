import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import InputForm from "./components/CustomInput"
import { FormValues, schema } from "./models"
 
export const CustomForm = () => {
  //viene de reactHookForm, useform devuelve metodos
  const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({ //usa de tipo formValues
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email:"",
      password: "",
      confirmPassword: ""
    }
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="name" control={control} label="Name" type="text" error={errors.name} />
      <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
      <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
      <InputForm name="confirmPassword" control={control} label="Confirm password" type="password" error={errors.confirmPassword} />    
      <button type="submit"> Submit </button>
    </form>
  )
}