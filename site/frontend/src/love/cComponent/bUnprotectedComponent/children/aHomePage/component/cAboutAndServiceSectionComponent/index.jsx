

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "src/love/iTemplate/examples/Cards/RotatingCard";
import RotatingCardFront from "src/love/iTemplate/examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "src/love/iTemplate/examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "src/love/iTemplate/examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "src/love/iTemplate/assets/images/rotating-card-bg-front.jpeg";
import bgBack from "src/love/iTemplate/assets/images/rotating-card-bg-back.jpeg";
import AboutSectionComponent from "./component/aAboutSectionComponent";
import ServiceSectionComponent from "./component/bServiceSectionComponent";

function AboutAndServiceSectionComponent({ Redux }) {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <AboutSectionComponent Redux={Redux} />
          <ServiceSectionComponent Redux={Redux} />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutAndServiceSectionComponent;
