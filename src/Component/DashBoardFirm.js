  import React, { useState, useEffect } from 'react';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableFooter from '@mui/material/TableFooter';
  import TablePagination from '@mui/material/TablePagination';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
  import Box from '@mui/material/Box';

  const useStyles = {
    tableContainer: {
      marginBottom: '16px',
    },
    table: {
      minWidth: 700,
    },
    tableHeader: {
      backgroundColor: '#1976D2',
      color: '#fff',
    },
  };

  function DashBoardFirm() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5255/GetFirmDetails')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching firm data:', error);
        });
    }, []);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <Box sx={useStyles.tableContainer}>
        <Typography variant="h4" gutterBottom>
          Firm Dashboard
        </Typography>
        <TableContainer component={Paper} sx={useStyles.tableContainer}>
          <Table sx={useStyles.table} aria-label="custom pagination table">
            <TableBody>
              <TableRow sx={useStyles.tableHeader}>
                <TableCell align="center">Serial Number</TableCell>
                <TableCell align="center">Signatory Name</TableCell>
                <TableCell align="center">Signatory Designation</TableCell>
                <TableCell align="center">Organization Type</TableCell>
                <TableCell align="center">Incorporation Date</TableCell>
                <TableCell align="center">GST Number</TableCell>
                <TableCell align="center">PAN REQUIRED</TableCell>
              </TableRow>
              {(rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.signatoryName}</TableCell>
                  <TableCell align="center">{row.signatoryDesignation}</TableCell>
                  <TableCell align="center">{row.organizationType}</TableCell>
                  <TableCell align="center">{row.incorporationDate}</TableCell>
                  <TableCell align="center">{row.gstNumber}</TableCell>
                  <TableCell align="center">{row.panrequired}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={7}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  export default DashBoardFirm;
