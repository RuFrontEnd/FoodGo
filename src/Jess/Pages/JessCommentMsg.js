import React, { useState, useEffect } from 'react'
import '../Components/JessCommentMsg/JessCommentInput.scss'
import JessCommentInput from '../Components/JessCommentMsg/JessCommentInput'

function JessMenu(props) {
  const [textInput, setTextInput] = useState('')
  const [comments, setComments] = useState([])
  const [rating, setRating] = useState(0)
  const { closeModal } = props

  async function messageData() {
    const url = 'http://localhost:5000/product/member1msg'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // data會是一個array
    console.log(data[0].created_at)
    // console.log(data[0].productname)

    // setTotal(total.push(data))
    // setTotal(data)
    setComments(data)
    // console.log(data)
  }
  useEffect(() => {
    messageData()
  }, [])

  return (
    <>
      <div className="container-fluid jess-comment-bg">
        <JessCommentInput
          textInput={textInput}
          setTextInput={setTextInput}
          comments={comments}
          setComments={setComments}
          rating={rating}
          setRating={setRating}
          closeModal={closeModal}
        />
        {/* <div className="jess-inputBorder"></div> */}
        {/* <div className="jess-commentBox">
          <JessCommentList comments={comments} />
        </div> */}
      </div>
    </>
  )
}

export default JessMenu
