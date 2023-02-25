
import React, { useRef } from 'react'
import Stars from "./Stars";
import data from "../JSON/profile/Highlights";
import celeb from "../../public/JSON/celebrate.json";

function Highlights() {

  return (
    <div className="flex flex-wrap justify-center">
      {
        data.map((item) => (
          <Stars key={item.id} animatedlogo={item.animation} teamico={item.id==3||4?item.teamico:null} celeb={item.id==1||item.id==4?celeb:null} HighlightsText={item.text} HighlightsNum={item.data}/>

        ))
      }

    </div>
  )
}

export default Highlights