
import React from 'react';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import axios from 'axios';
//import Homepage from './homepage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useParams } from 'react-router-dom';
import Icon from '../img/icon.png';
import {useNavigate } from "react-router-dom";


const Work_Allocation=()=>
{
const {JEid}= useParams();
const [linemanDetail, setLinemanDetail]= useState();
const [consumerDetail, setconsumerDetail]= useState();
var Account_Lineman_Mapping= [];

const handle_work= async()=>
{
    console.log(JEid);
 console.log("inside start allocation");
await axios.post('http://localhost:8080/work_allocation',
{JEid:JEid}).then((response)=>{ 

 setLinemanDetail(response.data.linemanDetail);
 setconsumerDetail(response.data.consumerDetail);
 console.log(linemanDetail);
 console.log(consumerDetail);
 
}).catch((e)=> console.log(e));
}

const assign_work=()=>
{
console.log({Account_Lineman_Mapping});
axios.post('http://localhost:8080/assign_work',{mapping:Account_Lineman_Mapping}).then((response)=>{ if(response.status==200) 
alert("Work Assigned Successfully");
 }).catch((e)=>{console.log("error occured")});
    
}

const handle_select=(e, AccountID)=>
{

  

    console.log(e.target.value);
    console.log(AccountID);
    let obj={Account:AccountID,
          Lineman:e.target.value};
    Account_Lineman_Mapping.push(obj);



}


const DisplayDetail=()=>
{
return(<> 
<button type="button" class="btn btn-primary mt-5" style={{ backgroundColor:'white',width:120, color:'black',textAlign:'center'}} onClick={assign_work}>Assign</button>
   
 <table style={{marginTop:10, padding:40,border:2, borderStyle:'solid', borderColor:'white'}}    >
    <tr style={{marginTop:30, padding:20, borderBottom:2, borderColor:'white', borderStyle:'solid'}}>
    <th style={{color:'white', marginLeft:20,padding:20}}>Account_ID</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Name</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Address</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Mobile</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Arrear (in Rs)</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Select Lineman</th>

    </tr>

    {consumerDetail.map((item)=>{
    
    return(<>

    <tr  style={{marginTop:30, padding:20 , borderBottom:1, borderStyle:'solid', borderColor:'white'}} >
    <td style={{color:'white', marginLeft:20,padding:20}}>{item.Account_ID}</td>
    <td style={{color:'white', marginLeft:20,padding:20}}> {item.Name}</td>
    <td style={{color:'white', marginLeft:20,padding:20}}>{item.Address}</td>
    <td style={{color:'white', marginLeft:20,padding:20}}>{item.Mobile}</td>
    <td style={{color:'white', marginLeft:20,padding:20}}> {item.Arrear}</td>
    
    <select  class="form-select form-select-sm mt-4" aria-label=".form-select-sm example" style={{marginRight:20, width:120}} onChange={(e)=>handle_select(e,item.Account_ID)}>
    <option selected>Select</option>
  {linemanDetail.map((lineman)=>{
 
  return(<option value={lineman.Name}>{lineman.Name}</option>);
  })}


</select>
 
   
</tr>
    </>);


    })}
    </table>
    </>);

}



    return(<>
    <div id='container' style={{backgroundColor:'#342D7E', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100%'}} >

    <h6 style={{color:'white', textAlign:'center', marginTop:30}}>Lineman Work Allocation by Junior Engineer</h6>
    
    <button type="button" class="btn btn-primary mt-5" style={{ backgroundColor:'white',width:120, color:'black',textAlign:'center'}} onClick={handle_work}>Start</button>
    {consumerDetail && linemanDetail?<DisplayDetail/>:null}
    
    
    </div>

    </>);
}

export default Work_Allocation;