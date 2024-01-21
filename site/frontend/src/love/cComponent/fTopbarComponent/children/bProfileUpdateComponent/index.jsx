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


const ProfileUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  const inputElement1 = useRef()
  const inputElement2 = useRef()

  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} >
        <MKBox component="section" py={{ xs: 6, sm: 12 }}>
          <Container>
            <Grid container item xs={12} justifyContent="center" mx="auto">
              <MKBox mt={{ xs: -16, md: -20 }} display="flex" flexDirection="column" alignItems="center">
                <MKAvatar src={Redux.state.ReceivedObject?.Retrieve?.image?.url || defaultUser} alt="Burce Mars" size="xxl" shadow="xl" />
              </MKBox>

              <Grid container justifyContent="center" py={2}>
                <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                  <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <MKTypography variant="h3">{Redux.state.ReceivedObject?.Retrieve?.firstName} {Redux.state.ReceivedObject?.Retrieve?.lastName}</MKTypography>
                  </MKBox>

                  <MKBox mt={4}>
                    <MKBox mb={2} display="flex" alignItems="center">
                      <MKButton 
                        size="small" 
                        variant="outlined" 
                        color="info" 
                        component={Link} 
                        onClick={() => inputElement1.current.click()}
                      >
                        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                        &nbsp;Choose Profile Picture
                      </MKButton>
                      <MKBox ml={1} textAlign="center">
                        <MKAvatar src={Redux.state.FormObject?.FormValue?.image?.url || defaultUser} alt="Burce Mars" size="md" shadow="xl" />
                      </MKBox>
                    </MKBox>
                    <MKBox mb={2}>
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
                    <MKBox mb={2}>
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
                    <MKBox mb={2}>
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
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput 
                        type='text' 
                        name='mobile'
                        label='Mobile'
                        placeholder='Mobile' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.mobile}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['mobile']}
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKBox mt={4}>
                    <MKBox mb={2} display="flex" alignItems="center">
                      <MKButton 
                        size="small" 
                        variant="outlined" 
                        color="info" 
                        component={Link} 
                        onClick={() => inputElement2.current.click()}
                      >
                        <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                        &nbsp;Choose Cover Image
                      </MKButton>
                      <MKBox ml={1} textAlign="center">
                        <MKAvatar src={Redux.state.FormObject?.FormValue?.coverImage?.url || defaultUser} alt="Burce Mars" size="md" shadow="xl" />
                      </MKBox>
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput 
                        type='text' 
                        name='title'
                        label='Title'
                        placeholder='Title' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.title}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['title']}
                      </MKTypography>
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput 
                        type='text' 
                        name='subtitle'
                        label='Subtitle'
                        placeholder='Subtitle' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.subtitle}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['subtitle']}
                      </MKTypography>
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput 
                        type='text' 
                        name='description'
                        label='Description'
                        placeholder='Description' 
                        onChange={event => handleInput(event, Redux)}
                        value={Redux.state.FormObject?.FormValue?.description}
                        fullWidth 
                      />
                      <MKTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.['description']}
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKBox mt={4}>
                    <MKBox mt={2}>
                      <MKBox mb={1}>
                        <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                          Address:
                        </MKTypography>
                      </MKBox>
                      <MKBox mb={2}>
                        <MKInput 
                          type='text' 
                          name='lane'
                          label='Lane'
                          placeholder='Lane' 
                          onChange={event => EventHandler.Address.Change(event, Redux)}
                          value={Redux.state.FormObject?.FormValue?.address?.lane}
                          fullWidth 
                        />
                        <MKTypography variant="caption" color='error'>
                          {Redux.state.FormObject.FormError?.['title']}
                        </MKTypography>
                      </MKBox>
                      <MKBox mb={2}>
                        <MKInput 
                          type='text' 
                          name='street'
                          label='Street'
                          placeholder='Street' 
                          onChange={event => EventHandler.Address.Change(event, Redux)}
                          value={Redux.state.FormObject?.FormValue?.address?.street}
                          fullWidth 
                        />
                        <MKTypography variant="caption" color='error'>
                          {Redux.state.FormObject.FormError?.['title']}
                        </MKTypography>
                      </MKBox>
                      <MKBox mb={2}>
                        <MKInput 
                          type='text' 
                          name='city'
                          label='City'
                          placeholder='City' 
                          onChange={event => EventHandler.Address.Change(event, Redux)}
                          value={Redux.state.FormObject?.FormValue?.address?.city}
                          fullWidth 
                        />
                        <MKTypography variant="caption" color='error'>
                          {Redux.state.FormObject.FormError?.['title']}
                        </MKTypography>
                      </MKBox>
                      <MKBox mb={2}>
                        <MKInput 
                          type='text' 
                          name='state'
                          label='State'
                          placeholder='State' 
                          onChange={event => EventHandler.Address.Change(event, Redux)}
                          value={Redux.state.FormObject?.FormValue?.address?.state}
                          fullWidth 
                        />
                        <MKTypography variant="caption" color='error'>
                          {Redux.state.FormObject.FormError?.['title']}
                        </MKTypography>
                      </MKBox>
                      <MKBox mb={2}>
                        <MKInput 
                          type='text' 
                          name='country'
                          label='Country'
                          placeholder='Country' 
                          onChange={event => EventHandler.Address.Change(event, Redux)}
                          value={Redux.state.FormObject?.FormValue?.address?.country}
                          fullWidth 
                        />
                        <MKTypography variant="caption" color='error'>
                          {Redux.state.FormObject.FormError?.['title']}
                        </MKTypography>
                      </MKBox>
                      <MKBox mb={2}>
                        <MKInput 
                          type='text' 
                          name='pinCode'
                          label='Pin Code'
                          placeholder='Pin Code' 
                          onChange={event => EventHandler.Address.Change(event, Redux)}
                          value={Redux.state.FormObject?.FormValue?.address?.pinCode}
                          fullWidth 
                        />
                        <MKTypography variant="caption" color='error'>
                          {Redux.state.FormObject.FormError?.['title']}
                        </MKTypography>
                      </MKBox>
                    </MKBox>
                    <MKBox mt={2}>
                      <MKBox mb={1} display="flex" alignItems="center">
                        <MKBox display="flex" width="100%">
                          <MKTypography component="span" variant="body2" color="text" fontWeight="bold">
                            Links:
                          </MKTypography>
                        </MKBox>
                        <MKBox display="flex">
                          <MKBox display="flex" justifyContent="space-between" alignItems="center"> 
                            <MKButton variant="gradient" color="success" iconOnly size="small"
                              onClick={() => EventHandler.Link.Add(Redux)}
                            >
                              <Icon>add</Icon>
                            </MKButton> 
                          </MKBox>  
                        </MKBox>
                      </MKBox>
                      {Redux.state.FormObject.FormValue?.links?.map((each, index) => {
                        return (
                          <React.Fragment key={index}>
                            <MKBox display="flex" mb={2}>
                              <MKBox display="flex" width="100%" mr={1}>
                                <MKInput 
                                  type='text' 
                                  name='title'
                                  label='Title'
                                  placeholder='Title' 
                                  onChange={event => EventHandler.Link.Change(event, Redux, index)}
                                  value={each?.title}
                                  fullWidth 
                                />
                              </MKBox>
                              <MKBox display="flex" width="100%" mr={1}>
                                <MKInput 
                                  type='text' 
                                  name='url'
                                  label='URL'
                                  placeholder='URL' 
                                  onChange={event => EventHandler.Link.Change(event, Redux, index)}
                                  value={each?.url}
                                  fullWidth 
                                />
                              </MKBox>
                              <MKBox display="flex" >
                                <MKBox display="flex" justifyContent="space-between" alignItems="center">
                                  <MKButton variant="gradient" color="error" iconOnly size="small"
                                    onClick={() => EventHandler.Link.Remove(Redux, index)}
                                  >
                                    <Icon>remove</Icon>
                                  </MKButton>                              
                                </MKBox>
                              </MKBox>
                            </MKBox>
                          </React.Fragment>
                        )
                      })}
                    </MKBox>
                  </MKBox>

                  <MKBox display="flex" justifyContent="left" alignItems="center" mt={3}>
                    <MKButton variant="gradient" color="info" size="small" onClick={OnClick}>
                      Update Profile
                    </MKButton>
                    <input type="file" name="image" style={{display: "none"}} ref={inputElement1} onChange={event => handleInput(event, Redux)} />
                    <input type="file" name="coverImage" style={{display: "none"}} ref={inputElement2} onChange={event => handleInput(event, Redux)} />
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

export default ProfileUpdateComponent