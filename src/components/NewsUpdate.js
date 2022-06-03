import React, { useEffect } from 'react';
import axios, { Axios } from 'axios';
import { useState } from 'react';

const NewsUpdate = (props) => {
    const [newsJSON, setNewsJSON] = useState([]);
    const [newsTitle, setNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [index, setIndex] = useState(0);

    const url = "https://newsapi.org/v2/top-headlines?country=id&apiKey=7c7194165604443c85a876fb29e5825c";
    
    function AxiosGet(){
        

        axios.get(url).then((res)=>{
            setNewsJSON(res.data.articles);

            const length = res.data.articles.length;
            if(length <= 20){
                setIndex(index + 1)
            }else{
                setIndex(0);
            }
        })
    }


    return (
        <div>
            <button onClick={AxiosGet}>Fetch URL</button>
        </div>
    )
}

export default NewsUpdate