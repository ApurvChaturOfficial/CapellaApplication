import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


const APIs = {
  // ForgotPassword API
  ForgotPasswordAPI: (Redux, navigate, ReduxUltimate) => {
      loading(ReduxUltimate, true)

      API.GlobalAPI.ProtectedAPI.AuthenticatedAPI.ForgotPasswordAPI({
      data: {
        eEmail: Redux.state.FormObject.FormValue.email,
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        toast.success(serverResponse.message);
        clearFormObject(Redux)
        navigate(`${FinalRouteName.AuthRoute.ResetPasswordRoute}/${serverResponse.token}`)
      }
    })
    .catch(error => {
      // console.log(error.response.data);
      const serverResponse = error.response.data
      toast.error(serverResponse.message);
    })
    .finally(() => loading(ReduxUltimate, false) );
  },
}

export default APIs