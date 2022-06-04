import React, { useState } from 'react';
import '../styles/main.css';

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item} ) {
  const [done,changeDone] = useState(item.done)
  const onClickFunction = () => {
    changeDone(!done)
  }
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={onClickFunction}/>
      <p className={done?"has-text-grey-light":""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;