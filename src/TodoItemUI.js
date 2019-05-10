import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';

function TodoItemUI(props) {
  return (
    <Fragment >
      <Input
        style={{ width: '300px', marginRight: '10px' }}
        value={props.inputValue}
        onChange={props.handleChange}
      />
      <Button
        type="primary"
        onClick={props.handleClick}
      >
        提交
      </Button>
      <List
        style={{ width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleDelete(index)}>
            {item}
          </List.Item>
        )}
      />
    </Fragment>
  )
}

export default TodoItemUI