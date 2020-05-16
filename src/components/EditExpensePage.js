import React from 'react';

const EditExpensePage = (props) => {
  const { id } = props.match.params;
  return (
    <div>
      <h1>EditExpensePage</h1>
      <p>Editing expense with the id of {id}</p>
    </div>
  );
};

export default EditExpensePage;
