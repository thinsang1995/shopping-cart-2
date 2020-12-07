import React from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../app/actions'

const Home = (props) => {

  const handleAddItem = (id) => {
    props.addItemToCart(id)
  }

  return(
    <div className='home-wrapper'>
      <h2>Our Items</h2>
      <ul className='box'>
        {props.items.map(item => (
          <div className='cart' key={item.id}>
            <img src={item.image} alt={item.name}/>
            <p className='cart-name'>{item.name}</p>
            <span 
              className='add-btn'
              onClick={() => handleAddItem(item.id)}>
            <i className='fa fa-plus'></i>
            </span>
            <div className='cart-info'>
              <p>{item.desc}</p>
              <p><b>Price: {item.price}$</b></p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

const mapState = state => ({
  items: state.items
})

const mapDispatch = dispath => ({
  addItemToCart: id => dispath(addItemToCart(id))
})

export default connect(mapState, mapDispatch)(Home)