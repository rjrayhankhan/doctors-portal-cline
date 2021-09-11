import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const BlogsPost = ({blog}) => {
    const {title, description, author, authorImg, date} = blog;
    return (
        <div className="card shadow-sm col-md-4">
            <div className="card-header d-flex align-items-center">
                <img src={authorImg} alt="" className="mx-3" width="60"/>
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
                <FontAwesomeIcon className="right-icon" icon={faArrowRight}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default BlogsPost;