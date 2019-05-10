import React, { Component } from 'react';
import TodoItemUI from './TodoItemUI'
import store from './store'
// import axios from 'axios'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitTodoListAction } from './store/actionCreator'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChangeStore = this.handleChangeStore.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleChangeStore)
  }

  render () {
    return (
      <TodoItemUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        handleDelete={this.handleDelete}
      />
    );
  }

  componentDidMount () {
    store.dispatch(getInitTodoListAction())
    // console.log('componentDidMount')
    
  }

  // renderItem () {
  //   return this.state.list.map((item, index) => {
  //     return (
  //       <TodoItem
  //         key={index}
  //         content={item}
  //         index={index}
  //         onDelete={this.handleDelete}
  //       >
  //         {item}
  //       </TodoItem>
  //     )
  //   })
  // }

  handleChange (e) {
    store.dispatch(getInputChangeAction(e.target.value))
    // const currentValue = e.target.value
    // this.setState(() => ({
    //   inputValue: currentValue
    // }))
  }

  handleClick () {
    store.dispatch(getAddItemAction())
  }

  handleDelete (index) {
    store.dispatch(getDeleteItemAction(index))
    // this.setState(({ list }) => {
    //   list.splice(index, 1)
    //   return {
    //     list: list
    //   }
    // })
  }

  handleChangeStore () {
    this.setState(() => (store.getState()))
  }

}

export default TodoList;
