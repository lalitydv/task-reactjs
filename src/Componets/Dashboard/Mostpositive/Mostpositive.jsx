import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import './Mostpositive.css';
import { URL } from '../../../Baseurl';
const Mostpositive = () => {
  const [sentimentData, setSentimentData] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      fetch(`${URL}/sample_assignment_api_5`, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`, // Encode username and password as base64
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setSentimentData(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    } else {
      console.error('No username or password available');
    }
  }, []);

  return (
    <div
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '0.5rem',
        padding: '1rem',
        background: '#fff',
        marginTop: '1rem',
      }}
    >
      <div>Community Feedback</div>
      <h1 className="dashboard-head">Mostly Positive</h1>

      <div className="line">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
      </div>
      {sentimentData && (
        <div className="flex">
          <p>
            Negative:{' '}
            <span style={{ fontWeight: 'bold' }}>{sentimentData.negative}</span>
          </p>
          <p>
            Positive:{' '}
            <span style={{ fontWeight: 'bold', marginTop: '5px' }}>
              {sentimentData.positive}
            </span>
          </p>
          <p>
            Neutral:{' '}
            <span style={{ fontWeight: 'bold' }}>{sentimentData.neutral}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Mostpositive;
