import React from 'react';
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import NotFound from './pages/Cart';
import Home from './pages/Home';
import Basket from './pages/Basket'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
          <Routes>
  <Route path="/" element={<Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>}> </Route>
  </Routes>
  <Routes>
  <Route path="/" element={<Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>}></Route>
  </Routes>
          </div>
          <Routes>
            <Route path="/" element={<Home categoryId={categoryId} sortType={sortType}/>} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;