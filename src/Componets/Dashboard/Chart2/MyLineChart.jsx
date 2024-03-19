import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Mostpositive from '../Mostpositive/Mostpositive';
import { URL } from '../../../Baseurl';
import Third from '../Third/Third';

const MyLineChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [lineVisibility, setLineVisibility] = useState({
    cumulative_tweets: true,
    unique_count: true,
  });

  const fetchData = async () => {
    try {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');

      if (!username || !password) {
        console.error('Username or password not found in local storage');
        return;
      }

      const response = await fetch(`${URL}/sample_assignment_api_4`, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Line data:', data); // Log the data to see its structure
      setSalesData(data); // Assuming your data contains the array to be used in the chart
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLegendClick = (entry) => {
    const { dataKey } = entry;
    setLineVisibility((prevState) => ({
      ...prevState,
      [dataKey]: !prevState[dataKey],
    }));
  };

  return (
    <>
      <Third />
      <div
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '0.5rem',
          padding: '1rem',
          background: '#fff',
          marginTop: '1rem',
        }}
      >
        <h1 className="dashboard-head">Customers by Device</h1>

        <br />
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date2" />
            <YAxis />
            <Tooltip />
            <Legend onClick={handleLegendClick} />
            {lineVisibility.cumulative_tweets && (
              <Line
                type="monotone"
                dataKey="cumulative_tweets"
                stroke="#8884d8"
                name="Cumulative Tweets"
              />
            )}
            {lineVisibility.unique_count && (
              <Line
                type="monotone"
                dataKey="unique_count"
                stroke="#82ca9d"
                name="Unique Count"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Mostpositive />
    </>
  );
};

export default MyLineChart;
