import React from "react";
import avatar from '@/assets/avatar.png'
import teamLogo from '@/assets/TeamLogo.png'
import { Tag, Divider } from "antd";

const ProfileCard = () => 
  <div>
    {/* avatar, name and level */}
    <div style={{display:'flex'}}>
      <img src={avatar} alt="avatar" style={{borderRadius:'50%', width:'100px',height:'100px', marginLeft:'0px'}}/>
      <div style={{display:'flex', flexDirection:'column', padding:'10px', marginLeft:'20px', justifyContent:'center', backgroundColor:'white'}}>
        <span style={{ fontSize:'18px'}}>Wayne Hao</span>
        <span style={{marginTop:'3px'}}>
          <Tag color='blue' style={{fontSize:'14px', width: 'fit-content'}}>A31</Tag>
          <Tag color='green' style={{fontSize:'14px', width: 'fit-content'}}>Lv. 4</Tag>
        </span>
      </div>
    </div>
    {/* bio section */}
    <div style={{marginTop:'10px',border:'1px #969696 dashed', borderRadius:'5px', height:'90px', display:'flex', alignItems:'center' }}>
      <p style={{margin:'15px'}}>This player is way too lazy to leave a comment...</p>
    </div>

    <Divider style={{borderColor: '#969696', marginTop:'15px'}}/>

    {/* team section*/}
    <div style={{display:'flex', alignItems:'center', marginTop:'-10px'}}>
      <img src={teamLogo} alt="team_logo" style={{borderRadius:'50%', width:'65px',height:'65px', marginLeft:'0px'}}/>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'20px', justifyContent:'center', backgroundColor:'white'}}>
        <span style={{ fontSize:'16px', fontWeight:'bold'}}>Waterloo Gamblers Union</span>
        <span>Chief: Wayne</span>
        <span>No. of Members: 9</span>
      </div>
    </div>
  </div>

export default ProfileCard;