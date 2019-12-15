import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../store/user';

function User(props) {
    useEffect(() => {
        console.log(123, props.userInfo);
        if(props.userInfo.title) return;
        props.getUserInfo();
    }, []);
    
    
    return <div>
        <h1>哈喽，{props.userInfo.title}, 你们最棒的老师是{props.userInfo.name}老师。</h1>
    </div>;
};

User.loadData = (store) => {
    return store.dispatch(getUserInfo());
};

export default connect(
    state => ({ userInfo: state.user.userInfo }), 
    { getUserInfo }
)(User);