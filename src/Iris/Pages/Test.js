import React, { useState, useEffect } from 'react';
import InputTest from './../../Share/Components/Input/InputTest';
import SelectBoxTest from './../../Share/Components/Input/SelectBoxTest';
import SearchBar from './../../Share/Components/Input/SearchBar';

function Test(props) {
  const [input, setInput] = useState('iris');
  const [searchInput, setSearchInput] = useState('');
  const { setName } = props;
  return (
    <>
      <div className="container iris-content-container">
        <div className="container iris-container">
          <h1>會員登入登出</h1>
          <h1>test 1</h1>
          <h1>姓名:</h1>
          <InputTest input={input} setInput={setInput} />
          <button onClick={() => setName(input)}>send</button>
        </div>

        <div className="container iris-container">
          <h1>test 2</h1>
          <h1>姓名:</h1>
          <SelectBoxTest input={input} setInput={setInput} />
          <button onClick={() => setName(input)}>send</button>
        </div>

        <div className="container iris-container">
          <h1>test 3</h1>
          <h1>姓名:</h1>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <button onClick={() => setName(searchInput)}>send</button>
        </div>
        <div className="container iris-container">
          <h1>test 3</h1>
          <h1>姓名:</h1>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <button onClick={() => setName(searchInput)}>send</button>
        </div>
      </div>
    </>
  );
}

export default Test;
