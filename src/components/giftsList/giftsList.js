import React, { PropTypes } from 'react'

// import Row from './row/row'

const GiftsList = (props) => {
  const viewGiftsList = () => {
    let i = 0
    return props.giftsList.map((gift) => {
      let row = gift.data()
      i++
      return (<li key={i}>{row.name}</li>)
    })
  }

  return (
    <ul>
      { viewGiftsList() }
    </ul>
  )
}

export default GiftsList
