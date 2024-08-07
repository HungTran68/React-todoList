import React from 'react'

const DataList = ({listTodos,
     handleSendListFromDataList,
     handleSendListEDitedFromDataList,
     showFormUpdate
    }) => {
    console.log('dtatlist',listTodos)
    // const [datas, setDatas] = useState(listTodos);

    const handleClickDeleteItem = (index) => {
        let indexBtn = index;
        console.log(indexBtn);
        let coppiedList = [...listTodos];
        let deletedList = coppiedList.filter((value,index) => index !== indexBtn)
        console.log('1',deletedList);
        handleSendListFromDataList(deletedList);
        
    }

    const handleClickEdit = (index) => {
        let indexEdit = index;
        let coppiedList = [...listTodos];
        coppiedList[indexEdit].isEditing = true;
        handleSendListEDitedFromDataList(coppiedList);
    }

  return (
    <>
     List Task : <br/>
            <ul>
            {listTodos.map((item,index) => {
                return (
                    <li key={index}> {item.nameTodo}
                     <button onClick={() => handleClickDeleteItem(index)}> Delete</button>
                     <button onClick = {() => handleClickEdit(index)}>Edit</button>                     
                     </li>
                )
            })}
            </ul>
    </>
  )
}

export default DataList