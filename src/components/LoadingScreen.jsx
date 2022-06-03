import React from 'react';
import {useState, useEffect} from "react";
import { PacmanLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);
    const readyYeah = useNavigate();
    const noReadyU = useNavigate();

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },5000);
    },[])

    function ready(){
        readyYeah('/gamepage');
    }

    function notReady(){
        noReadyU('/');
    }

    return (
        <div className="header1">
            <div className="loadingScreen">
                {
                    loading ? (<PacmanLoader loading={loading} size={40} color={'#FFFF00'} /> ) : 
                    (
                        <div className="readyOrNot">
                            <h1 className="titleReady">Are you ready?</h1>
                            <button className="ready btn btn-warning btn-outline-danger" onClick={ready} >Yes, Go Ahead!</button>
                            <button className="noU btn btn-warning btn-outline-danger" onClick={notReady} >No, Go Back!</button>
                        </div>
                    )
                }
            </div>
        </div>
        
    )
}

export default LoadingScreen