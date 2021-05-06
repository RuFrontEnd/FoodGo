import React, { useState } from 'react'
import './JessCommentInput.scss'
import 'antd/dist/antd.css'
import { Rate } from 'antd'

function JessCommentList(props) {
  const { comment } = props

  return (
    <>
      <div>
        <div key={comment.member_sid} className="jess-commentItem row">
          <div className="jess-ItemrateStarColor col-3">
            <Rate count={5} value={comment.starRating} disabled />
          </div>
          <div className="jess-itemTextBox col-6">{comment.content}</div>
          <div className=" jess-btnBox col-3">
            <div className="mr-3">{comment.created_at}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JessCommentList
