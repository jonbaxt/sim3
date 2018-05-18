import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

import imgHome from '../../Images/home_logo.png';
import imgNewPost from '../../Images/new_logo.png';
import imgShutDown from '../../Images/shut_down.png';


function Nav(props) {

    return (
        <div className='navCont'>
            {console.log(props)}
            {/* <h1>Nav</h1> */}
            <div>
                <div className='profilePic'>
                    <img src={props.profile} alt='' />
                </div>
                <div className='profileName'>
                    <p>{props.username}</p>
                </div>
            </div>

            {/* <Link to='/dashboard' ><button>Home</button></Link>
            <Link to='/new' ><button>New Post</button></Link>
            <Link to='/' ><button>Logout</button></Link> */}
            <Link to='/dashboard' ><img className='navigationPic' src={imgHome} alt='' /></Link>
            <Link to='/new' ><img className='navigationPic' src={imgNewPost} alt='' /></Link>
            <Link to='/' ><img className='navigationPic' src={imgShutDown} alt='' /></Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        username: state.username,
        profile: state.profile
    }
}


export default connect(mapStateToProps, {})(Nav);