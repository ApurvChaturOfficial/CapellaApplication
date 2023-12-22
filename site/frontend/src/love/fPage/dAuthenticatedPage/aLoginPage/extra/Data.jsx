import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import FinalRouteName from "src/love/gRoute/FinalRouteName"
import validateFormObject from "src/love/dFunction/bValidateFormObject"


const Data = (Redux) => {
  return (
    {
      title: "Login",
      inputs: [
        {
          label: "Email",
          placeholder: "Email",
          type: "email",
          name: "email",
          onChange: event => handleInput(event, Redux),
        },
        {
          label: "Password",
          placeholder: "Password",
          type: "password",
          name: "password",
          onChange: event => handleInput(event, Redux),
        },    
      ],
      buttons: [
        {
          type: "button",
          label: "Login",
          onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
        }
      ],
      links: [
        {
          note: "Don't have an account?",
          label: "Register",
          route: FinalRouteName.AuthRoute.RegisterRoute
        },
        {
          label: "Forgot Password",
          route: FinalRouteName.AuthRoute.ForgotPasswordRoute
        },
      ]
    }
  )
}

export default Data