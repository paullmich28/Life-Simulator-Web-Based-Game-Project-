import React from 'react'

const NewsUpdate = ({props}) => {
    return (
        <div>
          <h5 className="titleNews">{props.title}</h5>
          <p className="author">by: {props.author}</p>
          <img src={props.urlToImage} className="gambarBrita mb-2" alt=" "></img>
          <p className="desc">{props.description}</p>
        </div>
    );
}

export default NewsUpdate