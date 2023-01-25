import React from 'react'
import "./Home.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pagination, PaginationItem, Button } from '@mui/material';

const Home = () => {


    const createData = (call_Type, Direction, Duration , To, From, Via, CreatedAt, Status, Action) => {
        return { call_Type, Direction, Duration, To, From, Via, CreatedAt, Status, Action };
      }
      
      const rows = [
        createData('Answered', "Outbound", "6.0", "+33112356782", +"33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "9.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "16.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "3.7", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "16.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "6.0", "+33112356782", +"33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "9.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "16.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "3.7", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "16.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "6.0", "+33112356782", +"33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "9.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "16.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "3.7", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
        createData('Answered', "Outbound", "16.0", "+33112356782", "+33112356782", "+33112356782", "12-08-2022", "Unarchived", "Add Note"),
      ];

  return (
      <div className='Home'>
          <h1> 
              Turing Technologies Frontend Test
          </h1>
          <div className="Flex-Box2">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="Calls">
        <TableHead>
          <TableRow maxWidth>
            <TableCell>Call Type</TableCell>
            <TableCell align="right">Direction</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">From</TableCell>
             <TableCell align="right">To</TableCell>
            <TableCell align="right">Via</TableCell>
            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
            </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.call_Type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                      {row.call_Type}
              </TableCell>
              <TableCell align="right">{row.Duration}</TableCell>
              <TableCell align="right">{row.Direction}</TableCell>
                  <TableCell align="right">{row.From}</TableCell>
                  <TableCell align="right">{row.To}</TableCell>
              <TableCell align="right">{row.Via}</TableCell>
              <TableCell align="right">{row.CreatedAt}</TableCell>
                  <TableCell align="right">{row.Status}</TableCell>
                  <TableCell align="right"> <Button color="primary" variant='contained'>{row.Action }</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
              </TableContainer>
              <div className="Pagination">
              <Pagination count={5}
                  page={1}
                      variant="contained"
                      color='primary'
                      renderItem={(row) => (
                          <PaginationItem {...row} />
                  )}/>
                  </div>
          </div>
          
          
      </div>
  )
}

export default Home