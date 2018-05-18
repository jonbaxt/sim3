import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Dashboard.css';
// import Nav from '../../FunctionalComps/Nav/Nav';
import axios from 'axios';

class Dashboard extends Component  {
    constructor(){
        super()
        this.state = {
            posts: [],
            search: '',
            viewMine: false
        }
    }
    componentDidMount(){
        axios.get('api/posts/all').then( (allposts) => {
            console.log( allposts );
            console.log( this.props );
            this.setState({posts: allposts.data})
        })
    }
    
    handleSearch = (e) => {
        this.setState({ search: e })
        console.log(this.state.search)
    }

    givePostInfo = () => {
        return this.state.posts;
    }
    render(){
        let createPosts = this.state.posts.map( ( element, index ) => {
            return (
                    <Link key={element.id} to={`/post/${element.id}`} className='links' > 
                <div key={element.id} className='previewContainer' takethis={this.givePostInfo}>
                    
                    <h1>{element.title}</h1>
                    <div className='flR'>
                    <p>{element.username}</p>
                    <img className='profilePicDash' src={element.profile_pic} alt='' />
                    </div>
                
                </div>
                    </Link>
            )
        })
        return (
            <div>
                {console.log(this.props.match)}
                {/* <Nav /> */}
                <div className='dashMainBox'>
                    <div className='topContainer'>
                        <input type='text' onChange={ (e)=> this.handleSearch(e.target.value)}value={this.state.search}/>
                        <button  >Search</button>
                        <button  >Reset</button>
                        <input type='checkbox' value='My Posts'/><span>MyPosts</span>
                    </div>
                    <div className='bottomContainer'>
                    {createPosts}
                    </div>
                
                
                
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.username,
        profile: state.profile,
        userId: state.userId
    }
}

export default connect(mapStateToProps, null )( Dashboard );