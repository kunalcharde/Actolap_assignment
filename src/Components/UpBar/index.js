import { Button, Grid } from "@mui/material";
import React from "react";
import Form from "../Form";

const UpBar = () => {
  return (
    <div>
      <Grid container xs={12} sx={{margin :"1rem 0rem",padding:"1rem",border:"1px solid #000"}}>
        <Grid item xs={6} sx={{textAlign:"left"}}>
          <div>Employee Information</div>
        </Grid>
        <Grid item xs={6} sx={{textAlign:"right"}}>
          <Form  tittle="ADD"/>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpBar;
