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


const ProfileDeleteComponent = ({ Redux, OnClick }) => {
  const inputElement = useRef()

  // JSX
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={Redux.state.ReceivedObject?.Retrieve?.image?.url || defaultUser} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>

          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKTypography component="span" variant="body2" color="text">
                Are you sure, you want to delete your profile
              </MKTypography>

              <MKBox display="flex" justifyContent="left" alignItems="center" mt={2}>
                <MKButton variant="outlined" color="error" size="small" onClick={OnClick}>
                  Sure, Delete My Profile
                </MKButton>
              </MKBox>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default ProfileDeleteComponent