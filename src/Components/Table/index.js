import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Form from '../Form';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function TableData() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">FIRST NAME</StyledTableCell>
            <StyledTableCell align="center">LAST NAME</StyledTableCell>
            <StyledTableCell align="center">DESIGNATION</StyledTableCell>
            <StyledTableCell align="center">CONTACT NUMBER</StyledTableCell>
            <StyledTableCell align="center">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
            <StyledTableRow key={1}>
              <StyledTableCell align="center" >kUNAL</StyledTableCell>
              <StyledTableCell align="center">Charde</StyledTableCell>
              <StyledTableCell align="center">SDE</StyledTableCell>
              <StyledTableCell align="center">0515554</StyledTableCell>
              <StyledTableCell align="center">
                <Form tittle="EDIT"/>
                <Button> Remove</Button>
                </StyledTableCell>
            </StyledTableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
