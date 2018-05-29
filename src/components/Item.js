import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, kind, name}) => {
        console.log(name)
    return (
        <tr onClick={onClick}>
            <th scope="row">{kind}</th>
            <td>{name}</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
    )
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Item
