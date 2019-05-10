import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initTodoListAction = (list) => ({
  type: INIT_TODO_LIST,
  list
})

export const getInitTodoListAction = () => (dispatch) => {
  axios.get('/getList').then(res => {
    dispatch(initTodoListAction(res.data))
  })
}


