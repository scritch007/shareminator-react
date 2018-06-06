import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import NoteIcon from '@material-ui/icons/Note';

const Item = ({ onClick, kind, name}) => {
        console.log(name)
    return (
        <ListItem onClick={onClick}>
            <ListItemIcon scope="row">{kind == "folder" && <FolderIcon/> || <NoteIcon/> }</ListItemIcon>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    )
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Item
