import React from 'react'
import Container from 'src/love/iTemplate/assets/theme/components/container'
import MKBox from 'src/love/iTemplate/components/MKBox'
import Grid from "@mui/material/Grid";
import brand from 'src/love/dFunction/gBrand';

const Loader = ({ text }) => {
  return (
    <MKBox
      minHeight="100vh"
      width="100%"
    >
        <Grid
          container
          item
          minHeight="100vh"
          width="100%"
          xs={12}
          lg={8}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBox component="img" src={brand()?.logo} alt="Brand" width="4rem" mr={1.5}/>
          {text || "Loading..."}
        </Grid>
    </MKBox>
  )
}

export default Loader