import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './JessCommentInput.scss';
import Cross from './Images/cross.svg';
// import JessCommentList from '../../../Share/Components/Button/Button'
// import ReactStars from 'react-rating-stars-component'
import 'antd/dist/antd.css';
import { Rate } from 'antd';

function JessCommentInput(props) {
  const [textInput, setTextInput] = useState('');
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const { closeModal, orderItem } = props;
  // const {
  //   textInput,
  //   setTextInput,
  //   comments,
  //   setComments,
  //   rating,
  //   setRating,
  //   member_sid,
  //   closeModal,
  //   status,
  //   setStatus,
  // } = props

  async function handleSubmit(v) {
    // e.preventDefault();
    if (textInput === '') {
      return false;
    }

    const newItems = {
      product_sid: 1,
      member_sid: 1,
      starRating: rating,
      content: textInput,
      created_at: new Date().toLocaleString(),
      // created_at: null,
    };
    const newComments = [newItems, ...comments];
    setComments(newComments);
    const url = 'http://localhost:5000/product/member1msg';
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newItems),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();

    console.log('伺服器回傳的json資料', data);

    setTextInput('');
    setRating(0);
    // clearStar()
  }
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <div className="row mt-3">
        <div className="col-3  mt-2">
          <img
            src={'/productImages/Bento/' + '00_bento-chicken-breast' + '.jpg'}
            className="jess-comment-productPic"
          ></img>
        </div>
        <div className="col-8">
          <p className="jess-modalText">滿意此商品嗎：</p>
          <div className="jess-rateStar mt-0">
            <Rate count={5} value={rating} onChange={ratingChanged} allowHalf />
          </div>
          <textarea
            className="form-control  form-control-lg mt-3 jess-textarea"
            type="text"
            rows="4"
            style={{ fontSize: '1.7rem' }}
            placeholder="您的寶貴意見是我們成長的動力^_*"
            onChange={(e) => setTextInput(e.target.value)}
            // onChange={handleChange}
            value={textInput}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value) {
                // const newComments = [e.target.value, ...comments];
                const newItems = {
                  product_sid: 1,
                  member_sid: 1,
                  starRating: rating,
                  content: textInput,
                  // created_at: new Date(),
                };
                const newComments = [newItems, ...comments];
                setComments(newComments);
                setTextInput('');
              }
            }}
          ></textarea>
          <button
            className="jess-input-button"
            onClick={() => {
              closeModal();
              handleSubmit();
            }}
          >
            確認送出
          </button>
          <input
            type="button"
            value="demo"
            className="jess-demo-button"
            onClick={(e) =>
              setTextInput(
                '拾餐的便當真的好健康，網站超美又有趣，他們的工作人員也都好優秀，回購率100%!!'
              )
            }
          ></input>
        </div>
      </div>
    </>
  );
}

export default JessCommentInput;
