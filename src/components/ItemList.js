import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ items, browse }) => {
  if (!items){
    items = [];
  }  
  return (

      <table className='table'>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
      {items.map(item =>
        <Item
          key={item.id}
          {...item}
          onClick={() => browse(item.id)}
        />
      )}
      </tbody>
      </table>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    kind: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  browse: PropTypes.func.isRequired
}

export default ItemList
