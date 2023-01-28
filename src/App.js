import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Links from './components/Links';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Links />}>
              <Route index element={<Books />} />
              <Route path="categories" element={<Categories />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
