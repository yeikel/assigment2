import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Add extends React.Component {

    state = {
        name: '',
        address: '',
        open: false,
        building: {
            id: '',
            code: '',
            name: '',
            address: '',
            coordinates: {
                latitude: '',
                longitude: ''
            }
        }
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };


    update = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        console.log("Name : " + name);
        console.log("Value : " + value);

        this.state.building.id = Date.now();

        if (name === 'code') {
            this.state.building.code = value;
        }

        if (name === 'name') {
            this.state.building.name = value;
        }

        if (name === 'address') {
            this.state.building.address = value;
        }

        if (name === 'latitude') {
            this.state.building.coordinates.latitude = value;
        }

        if (name === 'longitude') {
            this.state.building.coordinates.longitude = value;
        }

    };

    handleSave = () => {
        this.handleClose();
        this.props.addBuilding(this.state.building);
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Add building</Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Add new building"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <form>

                                <TextField
                                    onChange={this.update}
                                    placeholder={"code"}
                                    name="code"/>
                                <TextField
                                    onChange={this.update}
                                    placeholder={"building name"}
                                    name="name"/><br/>
                                <TextField
                                    onChange={this.update}
                                    placeholder={"building address"}
                                    name="address"/>
                                <div>

                                    <TextField
                                        onChange={this.update}
                                        placeholder={"latitude"}
                                        name="latitude"/>
                                    <TextField
                                        onChange={this.update}
                                        placeholder={"longitude"}
                                        name="longitude"/>

                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Add;