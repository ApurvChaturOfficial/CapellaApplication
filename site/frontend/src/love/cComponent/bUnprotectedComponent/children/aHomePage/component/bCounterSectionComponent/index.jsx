

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "src/love/iTemplate/examples/Cards/CounterCards/DefaultCounterCard";

function CounterSectionComponent({ Redux }) {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          {Redux.state.ReceivedObject?.Retrieve?.CounterList?.map((each, index) => {
            return (
              <Grid item xs={12} md={4} key={index} >
                <DefaultCounterCard
                  count={each.subtitle}
                  suffix="+"
                  title={each.title}
                  description={each.description}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CounterSectionComponent;
