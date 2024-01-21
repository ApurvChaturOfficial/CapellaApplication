import React, { useEffect } from 'react'

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";
import MKAvatar from "src/love/iTemplate/components/MKAvatar";
import MKButton from "src/love/iTemplate/components/MKButton";
import MKTypography from "src/love/iTemplate/components/MKTypography";

// Images
import profilePicture from "src/love/iTemplate/assets/images/bruce-mars.jpg";
import { Link } from 'react-router-dom';
import FinalRouteName from 'src/love/gRoute/FinalRouteName';
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";
import HeaderComponent from '../../component/aHeaderComponent';


const ProfileRetrieveComponent = ({ Redux }) => {
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
                    <MKBox display="flex" alignItems="center">
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Profile Picture: {" "}
                      </MKTypography>
                      <MKBox ml={1} textAlign="center">
                        <MKAvatar src={Redux.state.ReceivedObject?.Retrieve?.image?.url || defaultUser} alt="Burce Mars" size="md" shadow="xl" />
                      </MKBox>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        First Name: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.firstName}
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Last Name: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.lastName}
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Email: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.email}
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Mobile: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.mobile}
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKBox mt={4} >
                    <MKBox display="flex" alignItems="center">
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Cover Image: {" "}
                      </MKTypography>
                      <MKBox ml={1} textAlign="center">
                        <MKAvatar src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || defaultUser} alt="Burce Mars" size="md" shadow="xl" />
                      </MKBox>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Title: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.title}
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Subtitle: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.subtitle}
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Description: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.description}
                      </MKTypography>
                    </MKBox>  
                  </MKBox>  

                  <MKBox mt={4} >
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Role: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.role?.aTitle}
                      </MKTypography>
                    </MKBox>
                  </MKBox>  

                  <MKBox mt={4} >
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Address: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        {Redux.state.ReceivedObject?.Retrieve?.address ? `
                          ${Redux.state.ReceivedObject?.Retrieve?.address?.lane}, 
                          ${Redux.state.ReceivedObject?.Retrieve?.address?.street}, 
                          ${Redux.state.ReceivedObject?.Retrieve?.address?.city}, 
                          ${Redux.state.ReceivedObject?.Retrieve?.address?.state}, 
                          ${Redux.state.ReceivedObject?.Retrieve?.address?.country}, 
                          ${Redux.state.ReceivedObject?.Retrieve?.address?.pinCode}, 
                        ` : '-'
                        }
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                        Links: {" "}
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        <Grid container spacing={0}>
                          {Redux.state.ReceivedObject?.Retrieve?.links?.map((each, index) => {
                            return (
                              <Grid item key={index} >
                                <MKTypography component="a" variant="body2" href={each?.url} ml={2}>
                                  <i className={`fab fa-${each?.title?.toLowerCase()}`} />
                                </MKTypography>
                              </Grid>
                            )
                          })}
                        </Grid>
                      </MKTypography>
                    </MKBox>
                  </MKBox>  

                  {/* <Grid container spacing={3} my={3}>
                    <Grid item>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        323&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        Posts
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        3.5k&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        Followers
                      </MKTypography>
                    </Grid>
                    <Grid item>
                      <MKTypography component="span" variant="body2" fontWeight="bold">
                        260&nbsp;
                      </MKTypography>
                      <MKTypography component="span" variant="body2" color="text">
                        Following
                      </MKTypography>
                    </Grid>
                  </Grid>
                  <MKTypography variant="body1" fontWeight="light" color="text">
                    Decisions: If you can&apos;t decide, the answer is no. If two equally difficult
                    paths, choose the one more painful in the short term (pain avoidance is creating an
                    illusion of equality). Choose the path that leaves you more equanimous. <br />
                    <MKTypography
                      component="a"
                      href="#"
                      variant="body1"
                      fontWeight="light"
                      color="info"
                      mt={3}
                      sx={{
                        width: "max-content",
                        display: "flex",
                        alignItems: "center",

                        "& .material-icons-round": {
                          transform: `translateX(3px)`,
                          transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                        },

                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                          transform: `translateX(6px)`,
                        },
                      }}
                    >
                      More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                    </MKTypography>
                  </MKTypography> */}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileRetrieveComponent