import {Modal} from "@mui/material";
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

export default function LocationFormDelete(props) {

    function submit () {
        props.deleteLocation(props.id);
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
                    Are you sure you want to delete this location?
                </h2>
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