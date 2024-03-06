import React, { useEffect } from 'react'

// react-router components
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Action } from './extra/State';

// Extra
import Data from './extra/Data';
import APIs from './extra/APIs';

// Other
import submitFormObject from '@/love/dFunction/cSubmitFormObject';

// Conponent
import AuthFormComponent from '@/love/cComponent/dAuthenticatedComponent/children/aAuthFormComponent';


const RegisterPage = ({ ReduxUltimate }) => {
	// Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.RegisterPageState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		RegisterAPIall: () => APIs.RegisterAPI(Redux, navigate, ReduxUltimate)
	}		

  // All Render
	// Submit Render
	useEffect(() => {
		submitFormObject(Redux, APICalls.RegisterAPIall)
	}, [Redux.state.FormObject.FormError])
	
	// Extra Render
	// useEffect(() => {
	// 	console.log(Redux.state)
	// }, [Redux.state])

  // JSX
  return (
    <React.Fragment>
			<AuthFormComponent Data={Data(Redux)} Redux={Redux} ReduxUltimate={ReduxUltimate} />
    </React.Fragment>
  )
}

export default RegisterPage