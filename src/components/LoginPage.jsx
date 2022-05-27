import React from "react";
import ImageSlider from "./ImageSlider";
import IsiNama from "./IsiNama";
import { SliderSetting } from "./SliderSetting";

const LoginPage = () => {
  return (
    <div className="header1">
      <div className="container">
        <div className="App">
          <h1 className="judul">7-Days UMN</h1>
          <ImageSlider slides={SliderSetting} />
          <IsiNama validation1={false} validation2={false} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage