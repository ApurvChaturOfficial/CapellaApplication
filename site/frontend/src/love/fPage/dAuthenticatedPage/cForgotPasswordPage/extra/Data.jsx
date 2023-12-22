import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import FinalRouteName from "src/love/gRoute/FinalRouteName"
import validateFormObject from "src/love/dFunction/bValidateFormObject"


const Data = (Redux) => {
  return (
    {
      title: "Forgot Password",
      inputs: [
        {
          label: "Email",
          placeholder: "Email",
          type: "email",
          name: "email",
          onChange: event => handleInput(event, Redux),
        },
      ],
      buttons: [
        {
          type: "button",
          label: "Send Link",
          onClick: event => validateFormObject(event, Redux, Function.validateFormValues)
        }
      ],
      links: [
        {
          label: "Login",
          route: FinalRouteName.AuthRoute.LoginRoute
        },
        {
          label: "Register",
          route: FinalRouteName.AuthRoute.RegisterRoute
        },
      ]
    }
  )
}

export default Data