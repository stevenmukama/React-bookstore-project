import React from 'react';

import AddNewBook from '../components/Books/AddNewBook';
import BookList from '../components/Books/BookList';
import Card from '../components/cardDesign/Card';

const HomePage = () => (
  <section>
    <Card>
      <BookList />
      <AddNewBook />
    </Card>
  </section>
);

export default HomePage;
