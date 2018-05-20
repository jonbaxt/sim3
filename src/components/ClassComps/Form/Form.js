import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Form.css';
import defImg from '../../Images/no_image.jpg'
// import Nav from '../../FunctionalComps/Nav/Nav';

class Form extends Component {
constructor(){
    super()
    this.state = {
        title: '',
        img: '',
        content: '',
        imgEmpty: true
    }
}
handleTitle = (e) => {
    this.setState({title: e})
    console.log(this.state.title)
}
handleImg = (e) => {
    this.setState({ img: e})
    console.log(this.state.img)
}
handleContent = (e) => {
    this.setState({ content: e});
    console.log(this.state.content)
}

handleComplete = () => {
    const sender = {
        title: this.state.title,
        img: this.state.img,
        content: this.state.content,
        author_id: this.props.userId
    }
    axios.post('/api/posts/createnew', sender).then( (success) => {
        console.log(success, 'postUpdated');
        this.forceUpdate();
    } )
}

    render() {
        return (
            <div className='pageBody'>

                <div className='formCont'>
                    <div className='formTitle'>
                        <h1>New Post</h1>
                    </div>

                    <div className='titleInsertBox'>
                        <h3>Title:</h3>
                        <input type='text' placeholder='New Title' onChange={ (e) => this.handleTitle(e.target.value)} value={this.state.title} />
                    </div>

                    <div className='pictureBox'>
                        <img className='border' src={this.state.img ? this.state.img  : defImg} alt='' />
                    </div>

                    <div className='imageURLArea'>
                        <h3>Image URL:</h3>
                        <input type='text' value={this.state.img} onChange={ (e) => this.handleImg(e.target.value)} />
                    </div>

                    <div className='contentArea' >
                    <h3>Content:</h3>
                    <textarea rows='7' onChange={ (e) => this.handleContent(e.target.value)} value={this.state.content} />
                    </div>

                    <div className='buttonFormArea'>
                    {/* <button onClick={console.log('you clicked me!')}>Post</button> */}
                    <Link to='/dashboard'><button onClick={this.handleComplete}>Post</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        profile: state.profile,
        userId: state.userId
    }
}
export default connect(mapStateToProps, null)(Form);