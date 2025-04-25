import React from "react";
import dayjs from "dayjs";
import { Tag, Progress, Button } from 'antd';

const formatWithDayjs = () => {
  return dayjs().format("HH:mm dddd, D MMMM");
};

const SessionStatus = () => 
  <div>
    <div style={{backgroundColor:'white', display:'flex', flexDirection:'column'}}>
      <span style={{ fontWeight:'bold', fontSize:'15px'}}>{formatWithDayjs()}</span>
      <span style={{ fontSize:'15px', marginTop:'8px'}}>Session Status: <Tag style={{marginLeft:'10px'}} color='green'>● ON</Tag></span>
    </div>
    <div style={{backgroundColor:'white', display:'flex', justifyContent:'center', marginTop:'5px'}}>
      <Progress type="circle" percent={0} size={85} format={()=>'X'}/>
    </div>
    <div style={{ marginTop:'7px', display:'flex', justifyContent:'center', backgroundColor:'white'}}>
      <Button style={{width:'200px'}}>Put Your Tag</Button>
    </div>
  </div>;
  

export default SessionStatus;