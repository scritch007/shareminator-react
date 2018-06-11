import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import NoteIcon from '@material-ui/icons/Note';

const Item = ({ onClick, kind, name, mDate, mimetype}) => {
    let dateString = new Date(mDate*1000);
    
    mimetype = mimetype.split("/")[0]
    return (
        <ListItem onClick={onClick}>
            <ListItemIcon scope="row">{kind == "folder" && <FolderIcon/> || <NoteIcon/> }</ListItemIcon>
            <ListItemText>{name}</ListItemText>
            <ListItemText>{dateString.toDateString()}</ListItemText>
            <ListItemText>{mimetype}</ListItemText> 
        </ListItem>
    )
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mDate: PropTypes.number.isRequired,
  mimetype: PropTypes.string.isRequired,
}

export default Item
