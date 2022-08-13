import React from 'react';
import "./comment.css";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Comment = () => {
  return (
    <div className='comment'>
        <div className='comment-left'>
            <KeyboardArrowUpIcon className='icon' />
            <p>123</p>
            <KeyboardArrowDownIcon className='icon' />
        </div>
        <div className='comment-right'>
            <h2>Doğukan Topçu</h2>
            <p>Consectetur culpa consectetur ex sint aliquip. Ea nulla tempor ut elit. Minim pariatur tempor tempor sit eu minim ex in.</p>
        </div>
    </div>
  )
}

export default Comment