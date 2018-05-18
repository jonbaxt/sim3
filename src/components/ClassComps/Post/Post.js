import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';
// import Nav from '../../FunctionalComps/Nav/Nav';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        // getPost = () => {
        axios.get(`/api/posts/${this.props.match.params.postid}`).then((takeitback) => {
            console.log(takeitback);
            console.log(takeitback.data);
            console.log(takeitback.data[0].title);
            this.setState({
                title: takeitback.data[0].title,
                img: takeitback.data[0].img,
                content: takeitback.data[0].content,
                author: takeitback.data[0].username,
                authorPicture: takeitback.data[0].profile_pic
            })

            console.log(this.state);
        }).catch(err => console.log('trouble'))

        // console.log();

    }

    render() {
        let post = () => (
            <div className='postContainer'>
                <h1>{this.state.title}</h1>
                <div className='postInner'>
                    <div className='upper'>
                        <img src={this.state.img} alt='' />
                        <p>{this.state.content}</p>
                    </div>
                    <div className='downer'>
                        <p>{this.state.author}</p>
                        <img src={this.state.authorPicture} alt='' />
                    </div>
                </div>
            </div>
        )
        console.log(this.props.match)
        // this.getPost()
        return (
            <div className='postMain'>
                {post()}
            </div>
        )
    }
}

export default Post;