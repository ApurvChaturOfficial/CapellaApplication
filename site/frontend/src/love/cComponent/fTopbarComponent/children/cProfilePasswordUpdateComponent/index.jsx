import React, { useEffect, useRef } from 'react'

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";
import MKAvatar from "src/love/iTemplate/components/MKAvatar";
import MKButton from "src/love/iTemplate/components/MKButton";
import MKTypography from "src/love/iTemplate/components/MKTypography";
import MKInput from 'src/love/iTemplate/components/MKInput';

// Images
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";
import handleInput from 'src/love/dFunction/dHandleInput';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../component/aHeaderComponent';


const ProfilePasswordUpdateComponent = ({ Redux, OnClick }) => {
  const inputElement = useRef()

  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} >
        <MKBox component="section" py={{ xs: 6, sm: 12 }}>
          <Container>
            <Grid container item xs={12} justifyContent="center" mx="auto">
              <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
                <MKAvatar src={Redux.state.ReceivedObject?.Retrieve?.image?.url || defaultUser} alt="Burce Mars" size="xxl" shadow="xl" />
              </MKBox>

              <Grid container justifyContent="center" py={2}>
                <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                  <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <MKTypography variant="h3">{Redux.state.ReceivedObject?.Retrieve?.firstName} {Redux.state.ReceivedObject?.Retrieve?.lastName}</MKTypography>
                  </MKBox>

                  <MKBox mt={4}>
                    <MKBox mb={2}>
                      <MKInput 
                        type='password' 
                        name='oldPassword'
                        label='Old Password'
                        placeholder='Old Password' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.title}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['oldPassword']}
                      </MKTypography>
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput 
                        type='password' 
                        name='newPassword'
                        label='New Password'
                        placeholder='New Password' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.subtitle}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['newPassword']}
                      </MKTypography>
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput 
                        type='password' 
                        name='confirmPassword'
                        label='Confirm Password'
                        placeholder='Confirm Password' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.description}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['confirmPassword']}
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKBox display="flex" justifyContent="left" alignItems="center" mt={2}>
                    <MKButton variant="gradient" color="info" size="small" onClick={OnClick}>
                      Update Profile Password
                    </MKButton>
                  </MKBox>

                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfilePasswordUpdateComponent