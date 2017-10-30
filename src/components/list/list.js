import React, { PropTypes } from 'react'

// import Row from './row/row'

const List = (props) => {
  const viewList = () =>
    props.list.map((row) =>
      <li key={row.id}>{row.name}</li>
    )

  return (
    <ul>
      { viewList() }
    </ul>
  )
}

export default List
