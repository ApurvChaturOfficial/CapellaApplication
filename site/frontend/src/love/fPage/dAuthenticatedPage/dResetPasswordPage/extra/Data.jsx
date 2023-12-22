import handleInput from "src/love/dFunction/dHandleInput"
import Function from "./Function"
import FinalRouteName from "src/love/gRoute/FinalRouteName"
import validateFormObject from "src/love/dFunction/bValidateFormObject"


const Data = (Redux) => {
  return (
    {
      title: "Reset Password",
      inputs: [
        {
          label: "New Password",
          placeholder: "New Password",
          type: "password",
          name: "newPassword",
          onChange: event => handleInput(event, Redux),
        },    
        {
          label: "Confirm Password",
          placeholder: "Confirm Password",
          type: "password",
          name: "confirmPassword",
          onChange: event => handleInput(event, Redux),
        },    
      ],
      buttons: [
        {
          type: "button",
          label: "Reset Password",
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