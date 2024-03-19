import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, MenuItem } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import './Bar.css';
import Cards from '../card/Cards';
import Product from '../Product/Product';
const Barchart = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedMonth(event.target.value);
  };

  // Define data for both last year and this year
  const lastYearData = [5000, 10000, 20000, 32000, 12000, 13000];
  const thisYearData = [6000, 2000, 40000, 21000, 9200, 8700];

  // Filter data based on the selected month
  const filteredData = selectedMonth
    ? {
        xAxis: [{ scaleType: 'band', data: [selectedMonth] }],
        series: [
          {
            name: 'Last_year',
            data: [lastYearData[months.indexOf(selectedMonth)]], // Get data for selected month
          },
          {
            name: 'This_year',
            data: [thisYearData[months.indexOf(selectedMonth)]], // Get data for selected month
          },
        ],
      }
    : {
        xAxis: [{ scaleType: 'band', data: months }],
        series: [
          { name: 'Last_year', data: lastYearData },
          { name: 'This_year', data: thisYearData },
        ],
      };

  return (
    <div
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '0.5rem',
        padding: '1rem',
        background: '#fff',
      }}
    >
      <Cards />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 className="dashboard-head">Comparison</h1>

        <div style={{ marginLeft: '10px' }}>
          <FormControl
            sx={{
              m: 1,
              minWidth: 100,
              // border: '1px solid ',
              // borderRadius: '40px',
              // outline: '0px solid',
            }}
          >
            <Select
              value={selectedMonth}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <BarChart
          xAxis={filteredData.xAxis}
          series={filteredData.series}
          // Set width to "100%"
          height={300}
        />
      </div>

      <Product />
    </div>
  );
};

export default Barchart;
