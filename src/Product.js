import React from 'react'
import ItemDescription from './ItemDescription'

// Fuction with properties as paratemeter
//function Product (props) {

/* Same function as above but using ES6 Destructing,
** basically pulls apart the object and directly uses the properties
*/
function Product ({ name, description, price }) {
  return (
    <div className="product">

      {/* Listing/ Rendring each properties with headings */}
      {/* <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h3>€{props.price}</h3> */}

      {/* Rendering using Destructing  */}
      {/* <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>€{price}</h3> */}

      {/* Using Child component/ sub component, passing props down
      ** the tree using ES6 Destructuring
      */}
      <ItemDescription name={name} description={description} />
      <h3>€{price}</h3>

    </div >
  )
}

export default Product;
