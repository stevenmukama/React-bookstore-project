import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CHECK_STATUS } from '../redux/categories/categories';
import Card from '../components/cardDesign/Card';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(CHECK_STATUS());
  };

  let statusContent;
  if (status && status !== '') {
    statusContent = <p>{status}</p>;
  }
  return (
    <Card>
      <h1>Hello there</h1>
      {statusContent}
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
    </Card>
  );
};

export default CategoriesPage;
