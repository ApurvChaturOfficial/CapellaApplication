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


const ProfileUpdateComponent = ({ Redux, OnClick }) => {
  const inputElement = useRef()

  // JSX
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={Redux.state.FormObject?.FormValue?.image?.url || defaultUser} alt="Burce Mars" size="xxl" shadow="xl" />
            <MKButton 
              size="small" 
              variant="gradient" 
              color="info" 
              component={Link} 
              onClick={() => inputElement.current.click()}
            >
              <Icon sx={{ fontWeight: "bold" }}>add</Icon>
              &nbsp;Choose Image
            </MKButton>
          </MKBox>

          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="left" alignItems="center" mb={1}>
                <MKBox mb={2} mr={2}>
                  <MKInput 
                    type='text' 
                    name='firstName'
                    label='First Name'
                    placeholder='First Name' 
                    onChange={event => handleInput(event, Redux)}
                    value={Redux.state.FormObject?.FormValue?.firstName}
                    fullWidth 
                  />
                  <MKTypography variant="caption" color='error'>
                    {Redux.state.FormObject.FormError?.['firstName']}
                  </MKTypography>
                </MKBox>
                <MKBox mb={2} mr={2}>
                  <MKInput 
                    type='text' 
                    name='lastName'
                    label='Last Name'
                    placeholder='Last Name' 
                    onChange={event => handleInput(event, Redux)}
                    value={Redux.state.FormObject?.FormValue?.lastName}
                    fullWidth 
                  />
                  <MKTypography variant="caption" color='error'>
                    {Redux.state.FormObject.FormError?.['lastName']}
                  </MKTypography>
                </MKBox>
              </MKBox>

              {/* <MKBox mb={2} mr={2}>
                <MKInput 
                  type='email' 
                  name='email'
                  label='Email'
                  placeholder='Email' 
                  onChange={event => handleInput(event, Redux)}
                  value={Redux.state.FormObject?.FormValue?.email}
                  fullWidth 
                />
                <MKTypography variant="caption" color='error'>
                  {Redux.state.FormObject.FormError?.['email']}
                </MKTypography>
              </MKBox> */}

              <MKTypography component="span" variant="body2" color="text">
                {Redux.state.FormObject?.FormValue?.email}
              </MKTypography>
              <MKBox display="flex" justifyContent="left" alignItems="center" mt={2}>
                <MKButton variant="outlined" color="info" size="small" onClick={OnClick}>
                  Update Profile
                </MKButton>
                {/* <MKButton variant="outlined" color="info" size="small" component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute}>
                  Update Password
                </MKButton>
                <MKButton variant="outlined" color="error" size="small" component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute}>
                  Close Profile
                </MKButton> */}
                <input type="file" name="image" style={{display: "none"}} ref={inputElement} onChange={event => handleInput(event, Redux)} />
              </MKBox>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default ProfileUpdateComponent