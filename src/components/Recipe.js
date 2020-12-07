import React from 'react'
import { connect } from 'react-redux'
import { ADD_SHIPPING, REMOVE_SHIPPING, CHECK_OUT } from '../app/actions'
import { withRouter } from 'react-router-dom'

class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  handleCheck = (e) => {
    if(e.target.checked) {
      this.props.addShipping()
    } else {
      this.props.removeShipping()
    }
  }

  componentWillUnmount() {
    const isCheck = this.textInput.current.checked
    if(isCheck) {
      this.props.removeShipping()
    }
  }

  handleCheckOut = () => {
    this.props.checkOut()
    this.props.history.push('/')
  }
  
  render() {
    return(
      <div className='recipe-wrapper'>
        <div className='recipe-info'>
          <label>
            <input type='checkbox' ref={this.textInput} onChange={(e) => this.handleCheck(e)} />
            <span>Shipping (6$)</span>
          </label>
          <p>Total: {this.props.total}</p>
        </div>
        <button className='checkout-btn' onClick={this.handleCheckOut}>Check out</button>
      </div>
    )
  }
}

const mapState = state => ({
  total: state.total
})

const mapDispatch = distpatch => {
  return {
    addShipping: () => distpatch({type: ADD_SHIPPING}),
    removeShipping: () => distpatch({type: REMOVE_SHIPPING}),
    checkOut: () => distpatch({type: CHECK_OUT})
  }
}

export default connect(mapState, mapDispatch)(withRouter(Recipe))