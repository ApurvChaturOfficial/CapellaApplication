

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

function AboutSectionComponent({ Redux }) {
  return (
    <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
      <RotatingCard>
        {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually &&
          <RotatingCardFront
            image={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.image?.url}
            icon="touch_app"
            title={
              <>
                {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.title}
              </>
            }
            description={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.subtitle}
          />
        }
        {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively &&
          <RotatingCardBack
            image={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.image?.url}
            title={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.title}
            description={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.subtitle}
            action={{
              type: "internal",
              route: "/sections/page-sections/page-headers",
              label: "More About Us",
            }}
          />
        }
      </RotatingCard>
    </Grid>
  );
}

export default AboutSectionComponent;
