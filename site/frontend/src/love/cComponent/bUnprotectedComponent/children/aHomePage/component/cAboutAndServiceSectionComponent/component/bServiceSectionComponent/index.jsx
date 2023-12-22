

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

function ServiceSectionComponent({ Redux }) {
  return (
    <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
      <Grid container spacing={3}>
      {Redux.state.ReceivedObject?.Retrieve?.ServiceList?.map((each, index) => {
        return (
          <Grid item xs={12} md={6} key={index} >
            <DefaultInfoCard
              icon="content_copy"
              title={each.title}
              description={each.description}
            />
          </Grid>
        )
      })}
      </Grid>
    </Grid>
  );
}

export default ServiceSectionComponent;
