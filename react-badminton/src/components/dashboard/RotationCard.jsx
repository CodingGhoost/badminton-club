import React from 'react';
import court from '@/assets/court.png'

const RotationCard = () => {
  return (
    <div>
      <div style={{backgroundColor:'white', display:'flex', flexDirection:'column'}}>
        <span>Next rotation in </span>
        <div style={{ fontSize:'20px', fontWeight:'bold',marginTop:'10px', display:'flex', justifyContent:'center'}}>
          <span>TIMER COMPONENT</span>
        </div>
        <img src={court} alt='court'/>
      </div>
    </div>
  )
};


export default RotationCard;