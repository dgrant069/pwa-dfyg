import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as types from '../../data/actions/constants'
import { fetchGiftsListAction } from '../../data/actions/giftsActions'
import GiftsList from '../../components/giftsList/giftsList'

const Home = (props) => {
  console.log('home - props', props)

  const handleClick = (e) => {
    return props.dispatch(fetchGiftsListAction())
  }

  props.dispatch(fetchGiftsListAction())

  return (
    <div className="App">
      <GiftsList giftsList={props.giftsList}/>
      <button onClick={(e) => handleClick(e)}>
        <Link to='/alt'>Add</Link>
      </button>
      <Link to='/alt'>alt</Link>
    </div>
  )
}

Home.propTypes = {
  // dispatch: PropTypes.func,
  // gift: PropTypes.array,
}

const mapStateToProps = state => {
  return {
    giftsList: state.giftsReducer.giftsList,
  }
}

export default connect(mapStateToProps)(Home)
