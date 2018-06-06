import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import List from '@material-ui/core/List';


const ItemList = ({ items, browse }) => {
  if (!items){
    items = [];
  }  
  return (
    <List>
      {items.elements.map(item =>
        <Item
          key={item.id}
          {...item}
          onClick={() => browse(item.id)}
        />
      )}
    </List>
  )
}

ItemList.propTypes = {
  items: {elements: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      kind: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    currentElement: PropTypes.string.isRequired
  }.isRequired,
  browse: PropTypes.func.isRequired
}

export default ItemList
