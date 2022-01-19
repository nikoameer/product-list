// Functional component way
// import React from 'react'

// function ItemDescription ({ name, description }) {
//   return (
//     <div>
//       <p>{name}</p>
//       <p><i>{description}</i></p>
//     </div>
//   )
// }

// export default ItemDescription;

// Class-based component way
import React, { Component } from 'react'

export default class ItemDescription extends Component {
  render () {
    // Using Destructuring to get the name and descriptions
    const { name, description } = this.props;

    return (
      <div>
        <p>{name}</p>
        <p><i>{description}</i></p>
      </div>
    )
  }
}

