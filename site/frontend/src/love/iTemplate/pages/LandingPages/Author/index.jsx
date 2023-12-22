

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "src/love/iTemplate/examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "src/love/iTemplate/pages/LandingPages/Author/sections/Profile";
import Posts from "src/love/iTemplate/pages/LandingPages/Author/sections/Posts";
import Contact from "src/love/iTemplate/pages/LandingPages/Author/sections/Contact";
import Footer from "src/love/iTemplate/pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "src/love/iTemplate/routes";

// Images
import bgImage from "src/love/iTemplate/assets/images/city-profile.jpg";

function Author() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;
