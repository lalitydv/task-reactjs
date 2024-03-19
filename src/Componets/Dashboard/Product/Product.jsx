import React from 'react';
import './Product.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import cam from './image/cam.webp';

function ruk(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    img: cam,
    cont: 'Camera Mi 360°',
    sold: 432,
    unit: 120,
    revenue: 51840,
    rating: 4.8,
  },
  {
    img: cam,
    cont: 'Message Gun',
    sold: 120,
    unit: 60,
    revenue: 25840,
    rating: 3.44,
  },
  {
    img: cam,
    cont: 'Vacuum-mop 2 Pro',
    sold: 432,
    unit: 320,
    revenue: 15840,
    rating: 3.22,
  },
  {
    img: cam,
    cont: 'vacuum-mop 2',
    sold: 221,
    unit: 234,
    revenue: 32840,
    rating: 2.0,
  },
];

const Product = () => {
  return (
    <>
      <div className="main-div">
        <div>
          <h2 className="head">Product</h2>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="start">Product</TableCell>
                  <TableCell align="start">Sold amount</TableCell>
                  <TableCell align="start">unit Price</TableCell>
                  <TableCell align="start">Revenue</TableCell>
                  <TableCell align="start">Rating</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.product}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="start" component="th" scope="row">
                      <div className="flex items-center gap-0">
                        <img className="img" src={row.img} alt="" />
                        <span>{row.cont}</span>
                      </div>
                    </TableCell>
                    <TableCell align="start">{row.sold}</TableCell>
                    <TableCell align="start">{row.unit}</TableCell>
                    <TableCell align="start">{row.revenue}</TableCell>
                    <TableCell align="start">
                      <div className="flex items-center gap-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2em"
                          height="1.2em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#ffaa53"
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                          />
                        </svg>
                        {row.rating}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Product;
