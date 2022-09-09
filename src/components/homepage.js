import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import axios from 'axios';
//import Homepage from './homepage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useParams } from 'react-router-dom';
import Icon from '../img/icon.png';
import {useNavigate } from "react-router-dom";



const Homepage=()=>
{
  const navigate = useNavigate();
  const {name}= useParams();
  const AddHandle=()=>
  {
    console.log("inside add");
  
   navigate("/add_lineman/"+name);
  
  }
  const handleAllocation=()=>
  {
navigate('/work_allocation/'+name);

  }

 
console.log("user id at home page"+name);

return(<>
<div id='container' style={{backgroundColor:'#342D7E'}} >
<div id='header' style={{width:"100%", height:100 , justifyContent:'center', display:'flex', flexDirection:'row-reverse' , marginTop:20 } }><h5 style={{textAlign:'center', marginTop:30, width:'85%' , marginRight:150, color:'white'}}>WELCOME TO JE DASHBOARD </h5> <div ><img src={Icon} style={{width:"70%", height:80 }} /><br/><h6 style={{padding:15, color:'white'}}> {name}</h6></div>
</div>
 <div style={{justifyContent:'center', display:'flex'}}> 
 <div id='body' >
<div className='d-flex'>
<a id="div_link" > <div   style={{width:200, height:200, backgroundColor:'#5B2C6F ', color:'white', margin:30, marginTop:30,display:'flex', justifyContent:'center', alignItems:'center'}} ><button type="button" class="btn btn-link" style={{color:'white',textDecoration: 'none'}}  onClick={handleAllocation}>Work Allocation</button></div> </a>
<a id="div_link" ><div  style={{width:200, height:200, backgroundColor:'#FF8C00',color:'white',margin:30 , display:'flex', justifyContent:'center', alignItems:'center'}} >
<button type="button" class="btn btn-link" style={{color:'white',textDecoration: 'none'}}  onClick={AddHandle}>Add & Delete Lineman</button>





</div>
</a>

</div>
<div className='d-flex'><div style={{width:200, height:200, backgroundColor:'#808B96 ', color:'white',margin:30 }} ><h6 style={{textAlign:'center', marginTop:80}}>Reports</h6></div>
<div style={{width:200, height:200, backgroundColor:'#A0123F', color:'white',margin:30 }} ><h6 style={{textAlign:'center', marginTop:80}}>More >></h6></div></div>

</div>
</div>
<div id='foooter'></div>
</div>


</>)

}

export default Homepage;
