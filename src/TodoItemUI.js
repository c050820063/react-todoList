import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
// import style from './todoItem.css';

function TodoItemUI({ inputValue, handleChange, handleClick, list, handleDelete }) {
  return (
    <Fragment>
      <Input
        style={{ width: '300px', marginRight: '10px' }}
        value={inputValue}
        onChange={handleChange}
      />
      <Button
        type="primary"
        onClick={handleClick}
      >
        提交
      </Button>
      <List
        style={{ width: '300px' }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleDelete(index)}>
            {item}
          </List.Item>
        )}
      />
    </Fragment>
  )
}

export default TodoItemUI