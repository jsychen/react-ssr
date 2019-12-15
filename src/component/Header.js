import React from 'react';
import { Link } from 'react-router-dom';

export default() => {
    return <div>
        <Link to="/">首页</Link>
        <Link to="/about" style={{marginLeft: '10px'}}>关于</Link>
    </div>;
}