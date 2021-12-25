import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core';

function Post() {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar 
                    className="post_avatar"
                    alt=""
                    src=""
                />
                <h3 className="post_text">Oxygeneleye</h3>
            </div>
            <img className="post_image"
                src="https://img.huffingtonpost.com/asset/5d037306240000300f91f7b1.jpeg?ops=1778_1000"
                alt=""
            />    
        </div>
    )
}

export default Post
