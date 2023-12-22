import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import FinalRouteName from "src/love/gRoute/FinalRouteName"
import validateFormObject from "src/love/dFunction/bValidateFormObject"


const Data = (Redux) => {
  return (
    {
      title: "Register asdsa",
      inputs: [
        {
          label: "First Name",
          placeholder: "First Name",
          type: "text",
          name: "firstName",
          onChange: event => handleInput(event, Redux),
        },
        {
          label: "Last Name",
          placeholder: "Last Name",
          type: "text",
          name: "lastName",
          onChange: event => handleInput(event, Redux),
        },
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
          label: "Register",
          onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
        }
      ],
      links: [
        {
          label: "Login",
          route: FinalRouteName.AuthRoute.LoginRoute
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