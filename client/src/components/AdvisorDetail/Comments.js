import React, { useState } from 'react';
import Comment from './Comment';
import "./comments.css";

import SendIcon from '@mui/icons-material/Send';

const Comments = () => {
    const [userComment, setUserComment] = useState("");
  return (
    <div className='comments'>
        <div className='user-comment'>
            <input type="text" placeholder='Yorumunuzu giriniz...' value={userComment} onChange={e => setUserComment(e.target.value)} />
            <SendIcon className='commend-send' />
        </div>

        <div className="all-comments">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    </div>
  )
}

export default Comments