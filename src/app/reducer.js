import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import { ADD_ITEM, ADD_QUANTITY, REMOVE_ITEM, SUBTRACT_QUANTITY, ADD_SHIPPING, REMOVE_SHIPPING, CHECK_OUT } from './actions'

const initState = {
  items: [
    {id: 1, name: 'Winter body', desc: 'Use our color picker to discover beautiful colors and harmonies with hex color.', price: 90, image: Item1},
    {id: 2, name: 'Adidas', desc: 'Use our color picker to discover beautiful colors and harmonies with hex color.', price: 110, image: Item2},
    {id: 3, name: 'Vans', desc: 'Use our color picker to discover beautiful colors and harmonies with hex color.', price: 80, image: Item3},
    {id: 4, name: 'White', desc: 'Use our color picker to discover beautiful colors and harmonies with hex color.', price: 120, image: Item4},
    {id: 5, name: 'Unknown shoe', desc: 'Use our color picker to discover beautiful colors and harmonies with hex color.', price: 100, image: Item5},
    {id: 6, name: 'Blues', desc: 'Use our color picker to discover beautiful colors and harmonies with hex color.', price: 130, image: Item6}
  ],
  addedItems: [],
  total: 0
}

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_ITEM: {
      const itemToAdded = [...state.items].find(item => item.id === action.id)
      const existedItem = [...state.addedItems].find(item => action.id === item.id)
      if(existedItem) {
        const newTotal = state.total + itemToAdded.price
        itemToAdded.quantity += 1
        return {
          ...state,
          total: newTotal 
        }
      } else {
        const newTotal = state.total + itemToAdded.price
        itemToAdded.quantity = 1
        return {
          ...state,
          addedItems: [...state.addedItems, itemToAdded],
          total: newTotal
        }
      }
    }

    case ADD_QUANTITY: {
      const newQuantity = [...state.addedItems]
      const addedItem = newQuantity.find(item => item.id === action.id)
      addedItem.quantity += 1
      const newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: newQuantity,
        total: newTotal
      }
    }

    case SUBTRACT_QUANTITY: {
      const newQuantity = [...state.addedItems]
      const addedItem = newQuantity.find(item => item.id === action.id)
      const newTotal = state.total - addedItem.price
      if(addedItem.quantity === 1) {
        const newItem = [...state.addedItems].filter(item => item.id !== action.id)
        return {
          ...state,
          addedItems: newItem,
          total: newTotal
        }
      } else {
        addedItem.quantity -= 1
        return {
          ...state,
          addedItems: newQuantity,
          total: newTotal
        }
      }
    }

    case REMOVE_ITEM: {
      const itemToAdded = [...state.items].find(item => item.id === action.id)
      const newItem = [...state.addedItems].filter(item => item.id !== action.id)
      const newTotal = state.total - (itemToAdded.price * itemToAdded.quantity)
      return {
        ...state,
        addedItems: newItem,
        total: newTotal
      }
    }

    case ADD_SHIPPING: {
      const newTotal = state.total + 6
      return {
        ...state,
        total: newTotal
      }
    }

    case REMOVE_SHIPPING: {
      const newTotal = state.total - 6
      return {
        ...state,
        total: newTotal
      }
    }

    case CHECK_OUT: {
      return {
        ...state,
        addedItems: [],
        total: 0
      }
    }

    default: 
      return state
  }
}

export default rootReducer