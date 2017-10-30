import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as types from '../../data/actions/constants'
import { fetchList } from '../../data/actions/listActions'
import List from '../../components/list/list'

const Home = (props) => {
  console.log('home - props', props)

  const handleClick = (e) => {
    return props.dispatch(fetchList())
  }

  props.dispatch(fetchList())

  return (
    <div className="App">
      <List list={props.list}/>
      <button onClick={(e) => handleClick(e)}>Add</button>
      <Link to='/alt'>alt</Link>
    </div>
  )
}

Home.propTypes = {
  // dispatch: PropTypes.func,
  // list: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    list: state.listReducer.list,
  }
}

export default connect(mapStateToProps)(Home)
