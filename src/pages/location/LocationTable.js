import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import LocationFormAdd from "./LocationFormAdd";
import {useEffect, useState} from "react";
import LocationFormEdit from "./LocationFormEdit";
import LocationFormDelete from "./LocationFormDelete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#004071',
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

function createData(id, address, estates_number, ten_km_population, sea_level) {
    return { id, address, estates_number, ten_km_population, sea_level };
}

export default function LocationTable(props) {

    const [rows, setRows] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState([]);
    const [deleteModalOpen, setDeleteModalOpen] = useState([]);

    const submitAddForm = (entity) => {

        let newRows = rows.slice(0,rows.length);

        newRows.push(createData(entity[0],entity[1],entity[2],entity[3],entity[4]));

        setRows(newRows);

        const updateEditModal = editModalOpen.slice(0,editModalOpen.length);
        updateEditModal.push({id: entity[0], open: false});
        setEditModalOpen(updateEditModal);
    }

    const submitEditForm = (entity) => {

        let newRows = rows.slice(0,rows.length);
        let editedRow = newRows.find( r => r.id.toString() === entity[0] );
        editedRow.address = entity[1];
        editedRow.estates_number = entity[2];
        editedRow.ten_km_population = entity[3];
        editedRow.sea_level = entity[4];

        setRows(newRows);
    }

    let handleEditModalCloses = () => {
        let newEditModalOpen = editModalOpen.slice(0, editModalOpen.length);

        for ( let i = 0; i < newEditModalOpen.length; i++){
            newEditModalOpen[i].open = false;
        }

        setEditModalOpen(newEditModalOpen);
    }

    let handleDeleteModalCloses = () => {
        let newDeleteModalOpen = deleteModalOpen.slice(0, deleteModalOpen.length);

        for ( let i = 0; i < newDeleteModalOpen.length; i++){
            newDeleteModalOpen[i].open = false;
        }

        setDeleteModalOpen(newDeleteModalOpen);
    }


    const handleDeleteModalOpens = (e) => {
        const id = e.target.name;

        let newDeleteModalOpen = deleteModalOpen.slice(0, deleteModalOpen.length);

        for ( let i = 0; i < newDeleteModalOpen.length; i++){
            if (newDeleteModalOpen[i].id.toString() === id){
                newDeleteModalOpen[i].open = true;
            }
        }

        setDeleteModalOpen(newDeleteModalOpen);
    }

    const handleEditModalOpens = (e) => {
        const id = e.target.name;

        let newEditModalOpen = editModalOpen.slice(0, editModalOpen.length);

        for ( let i = 0; i < newEditModalOpen.length; i++){
            if (newEditModalOpen[i].id.toString() === id){
                newEditModalOpen[i].open = true;
            }
        }

        setEditModalOpen(newEditModalOpen);
    }

    const deleteLocation = (id) => {
        debugger
        const rowIndex = rows.findIndex( r => r.id === id );

        const newRows =  [...rows.slice(0, rowIndex), ...rows.slice(rowIndex + 1, rows.length)];

        setRows(newRows);
    }

    const setupRows = () => {
        setRows([
            createData(1, 'Skopje', 100, 10000, 600),
            createData(2, 'Kumanovo', 200, 20000, 500),
            createData(3, 'Bitola', 300, 15000, 400),
            createData(4, 'Prilep', 400, 12000, 800),
            createData(5, 'Strumica', 500, 18000, 300),
            createData(6, 'Ohrid', 600, 22000, 350),
        ]);
        setEditModalOpen([
            {id: 1, open: false},
            {id: 2, open: false},
            {id: 3, open: false},
            {id: 4, open: false},
            {id: 5, open: false},
            {id: 6, open: false},
        ]);
        setDeleteModalOpen([
            {id: 1, open: false},
            {id: 2, open: false},
            {id: 3, open: false},
            {id: 4, open: false},
            {id: 5, open: false},
            {id: 6, open: false},
        ]);
    }

    useEffect(() => {
        setupRows();
    },[])

    return (
        <>
        <Grid item xs={1}>
            <Button variant="contained" onClick={props.handleAddModalOpen} color="success" style={{margin: "0 10px 0 10px"}}>
                Add Location
            </Button>
        </Grid>

        <LocationFormAdd open={props.addModalOpen} handleClose={props.handleAddModalOpen}
                         submitForm={submitAddForm} title="Add Location"/>

        <Grid item xs={10}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width="10%">Id</StyledTableCell>
                            <StyledTableCell width="22%">Address</StyledTableCell>
                            <StyledTableCell width="16%">Number of estates</StyledTableCell>
                            <StyledTableCell width="16%">Ten km population</StyledTableCell>
                            <StyledTableCell width="16%">Sea level</StyledTableCell>
                            <StyledTableCell width="16%"/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell>{row.address}</StyledTableCell>
                                <StyledTableCell>{row.estates_number}</StyledTableCell>
                                <StyledTableCell>{row.ten_km_population}</StyledTableCell>
                                <StyledTableCell>{row.sea_level}m</StyledTableCell>
                                <StyledTableCell align="center">

                                    <Button variant="contained" color="info" style={{margin: "0 10px 0 10px"}} name={row.id} onClick={handleEditModalOpens}>
                                        Edit
                                    </Button>
                                    <LocationFormEdit open={editModalOpen.find( e => e.id === row.id) !== undefined ? editModalOpen.find( e => e.id === row.id).open : false}
                                                      handleClose={handleEditModalCloses}
                                                      submitForm={submitEditForm} title="Edit Location" entity={row}/>

                                    <Button variant="outlined" color="error" m={2} name={row.id} onClick={handleDeleteModalOpens}>
                                        Delete
                                    </Button>
                                    <LocationFormDelete open={deleteModalOpen.find( e => e.id === row.id) !== undefined ? deleteModalOpen.find( e => e.id === row.id).open : false}
                                                        handleClose={handleDeleteModalCloses} id={row.id} deleteLocation={deleteLocation}/>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
        </>
    );
}