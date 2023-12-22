import { toast } from "react-toastify";
import API from "src/love/aAPI/API";
import clearFormObject from "src/love/dFunction/aClearFormObject";
import loading from "src/love/dFunction/fLoading";
import FinalRouteName from "src/love/gRoute/FinalRouteName";


const APIs = {
  // Register API
  RegisterAPI: (Redux, navigate, ReduxUltimate) => {
    loading(ReduxUltimate, true)

    API.GlobalAPI.ProtectedAPI.AuthenticatedAPI.RegisterAPI({
      data: {
        eFirstName: Redux.state.FormObject.FormValue.firstName,
        eLastName: Redux.state.FormObject.FormValue.lastName,
        eEmail: Redux.state.FormObject.FormValue.email,
        ePassword: Redux.state.FormObject.FormValue.password,

        aTitle: `This is ${Redux.state.FormObject.FormValue.firstName}`,
        aSubtitle: "Hi there I am using Beehive",
        aDescription: "This is some detailed description",
        aStatus: true,

        // cRole: '652e9f8cd7f2256d01fb2af0'
      }
    })
    .then(response => {
      // console.log(response.data);
      const serverResponse = response.data;

      if (serverResponse.success === true) {
        ReduxUltimate.dispatch({ type: ReduxUltimate.action.ExtraObject, payload: {
          ...ReduxUltimate.state.ExtraObject,
          Halchal: !ReduxUltimate.state.ExtraObject?.Halchal || true
        }})
        toast.success(serverResponse.message);
        clearFormObject(Redux)
        navigate(FinalRouteName.GlobalRoute.HomeRoute)
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