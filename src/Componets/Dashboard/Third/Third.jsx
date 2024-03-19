import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import Chart from 'react-google-charts';
import { URL } from '../../../Baseurl';

const Third = () => {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');

      if (!username || !password) {
        console.error('Username or password not found in local storage');
        return;
      }

      try {
        const response = await axios.get(`${URL}/sample_assignment_api_3`, {
          auth: {
            username: username,
            password: password,
          },
        });
        setScoreData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching score data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card
        sx={{
          minWidth: 100,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          {scoreData ? (
            <>
              <Chart
                width={'190px'}
                height={'100px'}
                chartType="PieChart"
                loader={<div>Loading Chart...</div>}
                data={[
                  ['Score Type', 'Value'],
                  ['Your Score', scoreData.score],
                  ['Remaining', 100 - scoreData.score],
                ]}
                options={{
                  pieSliceText: 'none',
                  legend: 'none',
                  pieStartAngle: 210,
                  pieEndAngle: 270,
                  pieHole: 0.7,
                  slices: {
                    0: { color: 'blue' },
                    1: { color: 'transparent' },
                  },
                }}
              />
              <div>
                {scoreData && (
                  <>
                    <Typography variant="h4">{scoreData.score}</Typography>
                    <Typography variant="body1">of 100 Points </Typography>
                  </>
                )}
              </div>
              <Divider />
              <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                {scoreData.title}
              </Typography>
              <Typography
                sx={{ mb: 1.5, fontWeight: 500 }}
                color="text.secondary"
              >
                {scoreData.message}
              </Typography>
              <Typography variant="body2">
                <Button variant="outlined">Improve your score</Button>
              </Typography>
            </>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Third;
