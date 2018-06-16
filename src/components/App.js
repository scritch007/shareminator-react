import React, { Component } from 'react';
import './App.css';
import VisibleItems from '../containers/VisibleItems'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ModalRoot from "../containers/modal";
import { login, hideLogin } from "../actions"
import { authenticate } from "../actions/browse"

const styles = {
  main: {
    paddingTop: "64px",
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {

  handleClickOpen() {
    console.log(this.handleClose)
    this.props.showLogin(this.handleClose, this.handleLogin)
  }

  handleClose(){
    this.props.hideLogin()
  };

  handleLogin (email, password) {
    this.props.sendLogin(email, password);
    this.props.hideLogin()
  }

  constructor(props){
    super(props);
    const { classes } = props;
    this.state = {
      ...props,
      classes: classes,
      login_disabled: props.auth && props.auth.authentication_header ? true:false
    };
  }
  render() {
    console.log("Re rendering" );
    console.log(this.state);
    return (
      <div className="App">
        <div>      
          <AppBar position="fixed">
            <Toolbar>
              <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                ShareMinator
              </Typography>
              <Button color="inherit" onClick={this.handleClickOpen} disabled={this.props.login_disabled}>Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className={this.props.classes.main}>
        <VisibleItems />
        </div>
        <ModalRoot/>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  console.log("log mapStateToProps")
  console.log(state)
  let newState = {
    ...state,
    login_disabled: state.auth && state.auth.authentication_header ? true:false
  }
  console.log(newState)
  return newState
}

const mapDispatchToProps = dispatch => ({
  showLogin: (onClose, onLogin) => dispatch(login(onClose, onLogin)),
  sendLogin: (email, password) => dispatch(authenticate(email, password)),
  hideLogin: () => dispatch(hideLogin())
})

App.propTypes = {
  classes: PropTypes.object.isRequired,
  login_disabled: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
