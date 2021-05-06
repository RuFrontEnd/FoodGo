import React, { useState } from 'react';
import { Link, Switch } from 'react-router-dom';
import './JessCommentOrder.scss';
import 'antd/dist/antd.css';
import ReactStars from 'react-rating-stars-component';

import { Rate } from 'antd';

function JessCommentOrder(props) {
  const { comments, orderItem } = props;
  return (
    <>
      {comments.map((item, index) => {
        return (
          <>
            <div className="jess-commentOderBg">
              <div
                key={item.product_sid}
                className="jess-commentOder row mx-auto"
              >
                <div className="jess-commentOrderStar col-3">
                  <ReactStars size={18} value={item.starRating} edit={false} />
                  <a href="/bento/0#1">
                    <p className="jess-textTittle">{item.productname}</p>
                  </a>
                  {/* <Rate count={5} value={item.starRating} allowHalf disabled /> */}
                </div>
                <div className="jess-OrderTextBox col-6">{item.content}</div>
                <div className=" jess-btnBox col-3">
                  <div className="mr-3">{item.created_at}</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default JessCommentOrder;
