import React, { useState, useEffect } from 'react';
import InputH50 from './../../Share/Components/Input/InputH50';
import InputH44 from './../../Share/Components/Input/InputH44';
import InputH40 from './../../Share/Components/Input/InputH40';
import TextArea from './../../Share/Components/Input/TextArea';
import SearchBar from './../../Share/Components/Input/SearchBar';
import SelectBox from './../../Share/Components/Input/SelectBox';
import MainPageSelectBox from './../../Share/Components/Input/MainPageSelectBox';
import InputAdd from './../../Share/Components/Input/InputAdd';
import InputAddress from './../../Share/Components/Input/InputAddress';

function Test2(props) {
  const { name } = props;
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      <div className="container iris-content-container">
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        <br />
        <InputH50 />
        <br />
        <InputH44 />
        <br />
        <InputH40 />
        <br />
        <TextArea />
        <br />
        <SelectBox />
        <br />
        <MainPageSelectBox />
        <br />
        <InputAdd />
        <br />
        <InputAddress />
        <h1>會員資料</h1>
        <h1>{name}</h1>
      </div>
    </>
  );
}

export default Test2;
