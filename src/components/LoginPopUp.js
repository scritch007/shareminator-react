import React from 'react';
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class LoginPopUp extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        open: props.open,
        onClose: props.onClose,
        onSend: props.onLogin,
        login: "",
        password:""
      }
  }

  handleChangeEmail(event){
    this.state.login = event.target.value;
  }

  handleChangePassword(event){
    this.state.password = event.target.value;
  }

  sendLogin(){
    console.log(this)
    this.state.onSend(this.state.login, this.state.password)
  }

  render() {
    return (
        <Dialog
          open={this.props.open}
          onClose={this.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Login in
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              onChange={this.handleChangeEmail.bind(this)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Password"
              type="password"
              onChange={this.handleChangePassword.bind(this)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.state.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendLogin.bind(this)} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

LoginPopUp.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  login: PropTypes.string,
  password: PropTypes.string,
};