import React, { useState, useEffect } from 'react';

// import IrisUserComment from '../../Iris/Components/IrisUserComment/IrisUserComment';
import IrisMemberMenu from '../../Iris/Components/IrisMemberMenuSect/IrisMemberMenuSect';

function JessComment(props) {
  const [textInput, setTextInput] = useState('');
  // const [viewFilter, setViewFilter] = useState(0);
  const { comments, setComments } = props;

  const handleCompleted = (id) => {
    const newComments = [...comments];
    const todoItemIndex = newComments.findIndex((item) => item.id === id);
    if (todoItemIndex !== -1) {
      newComments[todoItemIndex].completed = !newComments[todoItemIndex]
        .completed;
      setComments(newComments);
    }
  };
  const handleEditedToggle = (id) => {
    const newComments = [...comments];
    const commentItemIndex = newComments.findIndex((item) => item.id === id);
    if (commentItemIndex !== -1) {
      newComments[commentItemIndex].edited = !newComments[commentItemIndex]
        .edited;
      setComments(newComments);
    }
  };
  // 利用id值尋找對應的item的索引值，然後改變text值
  const handleEditedSave = (id, newText) => {
    // 先複製一個新的todos陣列
    const newComments = [...comments];

    // 利用id值尋找對應的item的索引值
    const commentItemIndex = newComments.findIndex((item) => item.id === id);

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (commentItemIndex !== -1) {
      // text 更改為新的 newText
      newComments[commentItemIndex].text = newText;
      // 設定回原本的todos
      setComments(newText);
      // 切換回原本的狀態
      handleEditedToggle(id);
    }
  };
  const handleDelete = (id) => {
    const newTodosFinal = comments.filter((item, index) => item.id !== id);

    setComments(newTodosFinal);
  };

  return (
    <>
      <div className="container-fluid d-flex">
        <IrisMemberMenu />

        <hr />
      </div>
    </>
  );
}

export default JessComment;
