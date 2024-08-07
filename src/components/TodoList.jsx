import React from 'react';
import { useState } from 'react';
import DataList from './DataList';

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [listTodos, setlistTodos] = useState([]);
    const [showFormUpdate, setShowFormUpdate] = useState(false); 
    const [todoUpdate, setTodoUpdate] = useState('');

    const handleInputTodo = (e) => {
        
        setTodo(e.target.value);
        console.log(todo);
    }

    const handleAddToList = () => {
        let objectTodos = {nameTodo: todo , isEditing: false}
        let newList = [...listTodos, objectTodos]
        setlistTodos(newList);
        console.log('234',objectTodos);
        setTodo('');
    }

    // const handleClickDeleteItem = (index) => {
    //     let indexBtn = index;
    //     console.log(indexBtn);
    //     let coppiedList = [...listTodos];
    //     let deletedList = coppiedList.filter((value,index) => index !== indexBtn)
    //     console.log('1',deletedList);
    //     setlistTodos(deletedList);
    // }

    // const handleClickEdit = (index) => {
    //     let indexEdit = index;
    //     let coppiedList = [...listTodos];
    //     coppiedList[indexEdit].isEditing = true;
    //     coppiedList.forEach((value,index) => {
    //         if (value.isEditing == true){
    //             setShowFormUpdate(true);
    //         }
           
    //     })
    //     console.log('111',coppiedList);
    //     setlistTodos(coppiedList);
    // }

    const handleInputUpdate = (e) => {
        setTodoUpdate(e.target.value)
    }

    const handleClickUpdateTodo = () => {
        let coppiedList = [...listTodos];
        let indexEditing = coppiedList.findIndex(item => item.isEditing );
        console.log('o day',indexEditing);
        let objectUpdate = {nameTodo: todoUpdate , isEditing: false}
        coppiedList.splice(indexEditing,1,objectUpdate);
        console.log('222',coppiedList);
        setlistTodos(coppiedList);
        setShowFormUpdate(false);
    }

    const handleSendListFromDataList = (arrayDeleted) => {
        setlistTodos(arrayDeleted);
    }

    const handleSendListEDitedFromDataList = (arrayEditting) => {
        arrayEditting.forEach((value,index) => {
            if (value.isEditing == true){
                setShowFormUpdate(true);
            }
        })
        setlistTodos(arrayEditting);    
    }



  return (
    <div>
        {!showFormUpdate && (<>
            <input onChange = {handleInputTodo} value={todo}></input>
            <button onClick = {handleAddToList}>Add Todos</button>
        </>)}
        
        {showFormUpdate && (<div className="form-update">
            <input placeholder='UPDATE here' onChange={handleInputUpdate} value={todoUpdate}></input>
            <button onClick={handleClickUpdateTodo}>UPDATE HERE</button>
        </div>)}
        
        <div>
           <DataList
           listTodos={listTodos}
           handleSendListFromDataList = {handleSendListFromDataList}
           handleSendListEDitedFromDataList = {handleSendListEDitedFromDataList}
           showFormUpdate = {showFormUpdate}
           
           />
            
        </div>
    </div>
  )
}

export default TodoList