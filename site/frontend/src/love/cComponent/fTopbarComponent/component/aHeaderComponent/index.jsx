import React, { useRef } from 'react'
import Card from 'src/love/iTemplate/assets/theme/components/card'
import MKBox from 'src/love/iTemplate/components/MKBox'
import bgImage from "src/love/iTemplate/assets/images/city-profile.jpg";
import MKButton from 'src/love/iTemplate/components/MKButton';
import { Link } from 'react-router-dom';
import Icon from 'src/love/iTemplate/assets/theme/components/icon';

const HeaderComponent = ({ Redux, children }) => {
  const inputElement = useRef()

  return (
    <React.Fragment>
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.2),
                rgba(gradients.dark.state, 0.2)
              )}, url(${Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          {/* <MKBox>
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
          </MKBox> */}
        </MKBox>

        {/* <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        > */}
          { children }
        {/* </Card> */}
      </MKBox>
    </React.Fragment>
  )
}

export default HeaderComponent