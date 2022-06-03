import React from 'react';
import { useState, useEffect } from 'react';
import NewsUpdate from './NewsUpdate';

const NewsGo = () => {

    const [data1, setData1] = useState([]);
    const newsURL =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=a3233a16bcf941debdd4ab025ff00c73";

        
    const fetchData1 = async () => {
        const data1 = await fetch(newsURL);
        const newss = await data1.json();
        setData1(newss.articles);
    };

    useEffect(() => {
        fetchData1();
    }, []);

    return (
        <div className='newsList'>
            {
                data1.map((props)=>{
                    return <NewsUpdate props={props} key={props.id} />;
                })
            }
        </div>
    )
}

export default NewsGo