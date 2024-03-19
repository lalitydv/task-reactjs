import React from 'react';
import { Grid } from '@mui/material';
import Barchart from './Barchart/Barchart'; // Assuming you have a Barchart component
import MyLineChart from './Chart2/MyLineChart'; // Assuming you have a MyLineChart component

const ChartsContainer = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <Barchart />
        </Grid>
        <Grid item xs={12} md={3}>
          <MyLineChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartsContainer;
