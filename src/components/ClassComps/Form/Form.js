import React, { Component } from 'react';

import './Form.css';
import defImg from '../../Images/no_image.jpg'
// import Nav from '../../FunctionalComps/Nav/Nav';

class Form extends Component {

    render() {
        return (
            <div className='pageBody'>

                <div className='formCont'>
                    <div className='formTitle'>
                        <h1>New Post</h1>
                    </div>

                    <div className='titleInsertBox'>
                        <h3>Title:</h3>
                        <input type='text' placeholder='New Title' />
                    </div>

                    <div className='pictureBox'>
                        <img className='border' src={defImg} alt='' />
                    </div>

                    <div className='imageURLArea'>
                        <h3>Image URL:</h3>
                        <input type='text' />
                    </div>

                    <div className='contentArea' >
                    <h3>Content:</h3>
                    <textarea rows='7'  />
                    </div>

                    <div className='buttonFormArea'>
                    <button onClick={() => console.log('you clicked me!')}>Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;