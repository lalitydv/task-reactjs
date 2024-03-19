import React, { useState, useEffect } from 'react';
import './Cards.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { URL } from '../../../Baseurl';

function Cards() {
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('None');

  const fetchData = async () => {
    try {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');

      if (!username || !password) {
        console.error('Username or password not found in local storage');
        return;
      }

      const response = await fetch(`${URL}/sample_assignment_api_1`, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="flex jc-sb">
          <h1 className="dashboard-head">Dashboard</h1>
          <div className="flex gap-0 items-center">
            <p className="Compare">Compare to </p>
            <FormControl fullWidth>
              <Select
                labelId="select-label"
                id="select"
                value={selectedOption}
                onChange={handleChange}
              >
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex gap-1 jc-sb cards-div">
          <Card sx={{ minWidth: 100 }} className="w-full">
            <CardContent>
              <Typography
                sx={{ fontSize: 20, fontWeight: 500, background: '#fff' }}
                color="text.secondary"
                gutterBottom
              >
                Purchase
              </Typography>
              <Typography variant="body2" className="flex items-center gap-0">
                <span className="card-h-2">
                  {data ? data.purchases : 'Loading...'}
                </span>
                {/* Add your percentage calculation and SVG icon here */}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 100 }} className="w-full">
            <CardContent>
              <Typography
                sx={{ fontSize: 20, fontWeight: 500 }}
                color="text.secondary"
                gutterBottom
              >
                Revenue
              </Typography>
              <Typography variant="body2" className="flex items-center gap-0">
                <span className="card-h-2">
                  {data ? `$${data.revenue}` : 'Loading...'}
                </span>
                {/* Add your percentage calculation and SVG icon here */}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 100 }} className="w-full">
            <CardContent>
              <Typography
                sx={{ fontSize: 20, fontWeight: 500 }}
                color="text.secondary"
                gutterBottom
              >
                Refunds
              </Typography>
              <Typography variant="body2" className="flex items-center gap-0">
                <span className="card-h-2">
                  {data ? `$${data.refunds}` : 'Loading...'}
                </span>
                {/* Add your percentage calculation and SVG icon here */}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Cards;
