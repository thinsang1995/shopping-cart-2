import React from 'react'
import { connect } from 'react-redux'
import Recipe from './Recipe'
import { addQuantity, subtractQuantity, removeItem } from '../app/actions'

const MyCart = (props) => {

  const handleRemove = (id) => {
    props.removeItem(id)
  }
  
  const handleAddQuantity = (id) => {
    props.addQuantity(id)
  }

  const handleSubtractQuantity = (id) => {
    props.subtractQuantity(id)
  }
  
  return(
    <div className='mycart-wrapper'>
      <h2>You have ordered:</h2>
      <ul className='mycart-box'>
        {props.addedItems && props.addedItems.map(item => (
          <div className='mycart' key={item.id}>
            <img src={item.image} alt={item.name}/>
            <div className='mycart-info'>
              <p className='mycart-name'>{item.name}</p>
              <div className='mycart-desc'>
                <p>{item.desc}</p>
                <p><b>Price: {item.price}$</b></p>
                <p><b>Quantity: {item.quantity}</b></p>
              </div>
              <div className='arrow-up-down'>
                <span><i className="fas fa-angle-up" onClick={() => handleAddQuantity(item.id)}></i></span>
                <span><i className="fas fa-angle-down" onClick={() => handleSubtractQuantity(item.id)}></i></span>
              </div>
              <button className='remove-btn' onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </ul>
      <Recipe />
    </div>
  )
}

const mapState = state => ({
  addedItems: state.addedItems
})

const mapDispatch = dispatch => {
  return {
    addQuantity: (id) => dispatch(addQuantity(id)),
    subtractQuantity: (id) => dispatch(subtractQuantity(id)),
    removeItem: (id) => dispatch(removeItem(id))
  }
}

export default connect(mapState, mapDispatch)(MyCart)