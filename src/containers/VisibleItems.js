import { connect } from 'react-redux'
import ItemList from '../components/ItemList'
import { VisibilityFilters, browse } from '../actions'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return items
    case VisibilityFilters.SHOW_FILES:
      return items.filter(t => t.kind!=="folder")
    case VisibilityFilters.SHOW_FOLDERS:
      return items.filter(t => t.kind==="folder")
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  items: getVisibleItems(state.items, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  browse: id => dispatch(browse(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
