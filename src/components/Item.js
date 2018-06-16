import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import NoteIcon from '@material-ui/icons/Note';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    type: {
        width: '20px'
    },
    name: {
        width: '30%',
        "& span": {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
    },
    date: {
        width: '60px'
    },
    mimetype: {
        width: "100px"
    }
}

class Item extends Component{
    constructor (props) {
        super(props);
        const { classes } = props;
        this.state = {
            ...props,
            classes: classes,
        }
    }

    render(){
        let dateString = new Date(this.state.mDate*1000);
        
        let mimetype = this.state.mimetype.split("/")[0]
        return (
            <ListItem onClick={this.state.onClick}>
                <ListItemIcon className={this.props.classes.type}>{this.state.kind == "folder" && <FolderIcon/> || <NoteIcon/> }</ListItemIcon>
                <ListItemText className={this.props.classes.name}>{this.state.name}</ListItemText>
                <ListItemText className={this.props.classes.date}>{dateString.toDateString()}</ListItemText>
                <ListItemText className={this.props.classes.mimetype}>{mimetype}</ListItemText> 
            </ListItem>
        )
    }
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mDate: PropTypes.number.isRequired,
  mimetype: PropTypes.string.isRequired,
}

export default withStyles(styles)(Item);
