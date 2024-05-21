import React, { useState } from 'react';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [indexVal, setIndexVal] = useState(null);
  const [editVal, setEditVal] = useState('');
  const handleInput = () => {
    setTodos((prev) => [...prev, inputVal]);
    setInputVal('');
  };
  const handleEdit = (indexValue) => {
    console.log('editVal', editVal);
    setTodos(
      todos.map((task, index) => (index === indexValue ? editVal : task))
    );
    setEditVal('');
    setIndexVal(null);
  };

  const handleEditBtn = (index) => {
    setIndexVal(index);
    setEditVal(todos[index]);
  };

  const handleRemove = (indexValue) => {
    setTodos(todos.filter((task, index) => index !== indexValue));
  };
  return (
    <div>
      Todo....
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleInput}>addTask</button>
      {todos && (
        <div>
          {todos.map((task, index) => (
            <li key={task}>
              {indexVal === index ? (
                <>
                  <input
                    type="text"
                    value={editVal}
                    onChange={(e) => setEditVal(e.target.value)}
                  />
                  <button onClick={() => handleEdit(index)}>save</button>
                  <button onClick={() => setIndexVal(null)}>cancel</button>
                </>
              ) : (
                <>
                  {task}
                  <button onClick={() => handleEditBtn(index)}>Edit</button>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
