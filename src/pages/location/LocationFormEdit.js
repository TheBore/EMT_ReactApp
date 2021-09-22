import {Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import {ButtonToolbar} from "react-bootstrap";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function LocationFormEdit (props) {

    function submit () {
        let entity = [];
        entity.push(document.getElementById("id").value);
        entity.push(document.getElementById("address").value);
        entity.push(document.getElementById("estates_number").value);
        entity.push(document.getElementById("ten_km_population").value);
        entity.push(document.getElementById("sea_level").value);
        props.submitForm(entity);
        props.handleClose();
    }

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2>
                    {props.title}
                </h2>
                <TextField style={{width: '100%'}} id="id" label="Id" variant="standard" defaultValue={props.entity.id} disabled/>
                <TextField style={{width: '100%'}} id="address" label="Address" variant="standard" defaultValue={props.entity.address}/>
                <TextField style={{width: '100%'}} id="estates_number" label="Number of estates" variant="standard" defaultValue={props.entity.estates_number}/>
                <TextField style={{width: '100%'}} id="ten_km_population" label="Ten km population" variant="standard" defaultValue={props.entity.ten_km_population}/>
                <TextField style={{width: '100%'}} id="sea_level" label="Sea level" variant="standard" defaultValue={props.entity.sea_level}/>
                <ButtonToolbar style={{textAlign: 'center', paddingTop: '20px'}}>
                    <Button variant="contained" color="secondary" style={{margin: "0 10px 0 10px"}} onClick={submit}>
                        Submit
                    </Button>
                    <Button variant="outlined" onClick={props.handleClose} color="error" style={{margin: "0 10px 0 10px"}}>
                        Cancel
                    </Button>
                </ButtonToolbar>
            </Box>
        </Modal>
    )
}