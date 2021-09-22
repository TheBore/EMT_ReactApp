import {Component} from "react";
import {Grid} from "@mui/material";
import LocationTable from "./LocationTable";

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalOpen: false,
            editModalOpen: false,
        }
    }

    handleAddModalOpen = () => {
        this.setState({
            addModalOpen: !this.state.addModalOpen,
        })
    }

    handleEditModalOpen = () => {
        this.setState({
            editModalOpen: !this.state.editModalOpen,
        })
    }

    render() {
        return(
            <Grid container mt={2}>

                <LocationTable
                    addModalOpen={this.state.addModalOpen} handleAddModalOpen={this.handleAddModalOpen}
                    editModalOpen={this.state.editModalOpen} handleEditModalOpen={this.handleEditModalOpen}
                />

            </Grid>

        )
    }
}

export default Location;