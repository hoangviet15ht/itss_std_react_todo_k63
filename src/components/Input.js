import React, { useState } from 'react';
import {getKey} from "../lib/util";

/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input(props  ) {
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      key: getKey(), text: input, done: false
    })

    setInput('')
  }

  return (
    <div className="panel-block">
      {/* <input class="input" type="text" onChange={handleChange}></input> */}
      <form onSubmit={handleSubmit}>
        <input class="input" type="text" onChange={handleChange}></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default Input;
