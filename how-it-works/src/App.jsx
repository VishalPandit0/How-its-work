import React from "react"
import { useState } from "react"
import './App.css'
import goal from './assets/goal.png'
import addFriend from './assets/add-friend.png'
import giftCard from './assets/gift-card.png'
import payPerClick from './assets/pay-per-click.png'
import Arrow1 from "./assets/Arrow1.svg";
import Arrow2 from "./assets/Arrow2.svg";
import Arrow3 from "./assets/Arrow3.svg";


function App() {

  // Here you can add more steps if you want
  const [steps, setSteps] = useState([
    { id: 1, text: "Step 1:", subtext: "Set your goal", icon: goal , arrow:Arrow1 },
    { id: 2, text: "Step 2:", subtext: "Create or Join Group", icon: addFriend , arrow:Arrow2  },
    { id: 3, text: "Step 3:", subtext: "Pay Amount on Time", icon: payPerClick , arrow:Arrow3 },
    { id: 4, text: "Step 4:", subtext: "Earn Reward", icon: giftCard },
  ])
  


  return (
    <div className="container">
      <div className="heading">
        How It Works
      </div >
      <div className="aboveSteps"> 
      {

        steps.map((step,index)=>(
          <div className={`insideStep${index+1}`}>

          <div className="steps" key={step.id}>
            <img className='stepIcon' src={step.icon} alt="" />
            <p className="stepText">
            {step.text} <br /> {step.subtext}
            </p>
          </div >
        
            {index < steps.length - 1 && <img className="arrow" src={step.arrow} alt={`Arrow ${index}`} />}
          
          </div>
        
        ))
      }
      </div>


    </div>
  )
}

export default App
