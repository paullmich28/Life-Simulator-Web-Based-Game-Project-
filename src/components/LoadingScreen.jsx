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
        <div className="loadingScreen">
            {
                loading ? (<PacmanLoader color={"#B42435"} loading={loading} size={40} /> ) : 
                (
                    <>
                        <h1 className="titleReady">Are you ready?</h1>
                        <button className="ready" onClick={ready} >Yes, Go Ahead!</button>
                        <button className="noU" onClick={notReady} >No, Go Back!</button>
                    </>
                )
            }
        </div>
    )
}

export default LoadingScreen