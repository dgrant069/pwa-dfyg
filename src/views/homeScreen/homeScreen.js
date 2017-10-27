import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as types from '../../data/actions/constants'
import { fetchList } from '../../data/actions/listActions'
import List from '../../components/list/list'

const Home = (props) => {
  console.log('home - props', props)
  // this.props.dispatch(types.FETCH_LIST)
  const handleClick = (e) => {
    return props.dispatch(fetchList())
  }

  return (
    <div className="App">
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <List list={props.list}/>
      <button onClick={(e) => handleClick(e)}>Add</button>
      <Link to='/alt'>alt</Link>
    </div>
  )
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // list: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  console.log('state %o', state)
  return {
    list: state.listReducer.list,
  }
}

export default connect(mapStateToProps)(Home)
