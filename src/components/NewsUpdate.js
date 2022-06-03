import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const NewsUpdate = (props) => {
    const [newsJSON, setNewsJSON] = useState({});
    const [newsTitle, setNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [index, setIndex] = useState(0);

    const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=7c7194165604443c85a876fb29e5825c";

    useEffect(() => {
        axios.get(url).then((res)=>{
            res.json();
        }).then((data)=>{
            setNewsJSON(data.articles);
        }).catch((err)=>{
            console.error("ERROR");
        })
    });

    return (
        <div>
            <h1>{newsTitle !== "" ? newsTitle : "Loading"}</h1>
            <p>{newsContent !== "" ? newsContent : "Loading"}</p>
        </div>
    )
}

export default NewsUpdate