import React from 'react';
import court from '@/assets/court.png';
import {Button} from 'antd';
import CountdownTimer from '@/components/utils/Timer';

const RotationCard = () => {
  return (
    <div>
      <div style={{backgroundColor:'white', display:'flex', flexDirection:'column'}}>
        <span style={{ fontSize:'15px', fontWeight:'bold'}}>Next rotation in: </span>
        <div style={{ fontSize:'20px', fontWeight:'bold',marginTop:'5px', display:'flex', justifyContent:'center'}}>
          <CountdownTimer/>
        </div>
        <div style={{ display:'flex', justifyContent:'center', marginTop:'5px'}}>
          <img style={{ height:'70px', width:'140px' }} src={court} alt='court'/>
        </div>
        <div style={{ marginTop:'11px', display:'flex', justifyContent:'center', backgroundColor:'white'}}>
          <Button style={{width:'200px'}}>Check Rotations</Button>
        </div>
      </div>
    </div>
  )
};


export default RotationCard;