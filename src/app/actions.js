export const ADD_ITEM = 'ADD_ITEM'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_SHIPPING = 'ADD_SHIPPING'
export const REMOVE_SHIPPING = 'REMOVE_SHIPPING'
export const CHECK_OUT = 'CHECK_OUT'

export const addItemToCart = (id) => {
  return {
    type: ADD_ITEM,
    id
  }
}

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const subtractQuantity = (id) => {
  return {
    type: SUBTRACT_QUANTITY,
    id
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}