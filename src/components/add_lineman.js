

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


const Add_Lineman=()=>{

  const {JEid}=   useParams();
 const [name, setName]= useState();
 const [password, setPassword]= useState();
 const [aadhar, setAadhar]= useState();
 const [mobile, setMobile]= useState();
 const [Lineman, setLineman]= useState("");
 const handleDisplay= async()=>
 {


   await axios.get('http://localhost:8080/give_lineman').then((response)=> { 
   setLineman(response.data.message);  
   console.log(response.data.message);
 }).catch((e)=> console.log(e))
  

 
 }
 const handleDelete= async(e)=>
{
  console.log("inside delete");
console.log(e);
await axios.post('http://localhost:8080/delete_lineman',{Aadhar:e}).then((response)=>{ 
if(response.status==200)
{
  console.log("LineMan Deleted")
  alert(`Lineman with Addhar no ${e}  Deleted Successfully`); 
   handleDisplay();

}

}).catch((e)=>{console.log(e)});

}
const Display=()=>
{
  console.log("inside display");

return(
    <>
  <table style={{marginTop:10, padding:10}}>
    <tr style={{marginTop:30, padding:20, borderBottom:2, borderColor:'white', borderStyle:'solid'}}>
    <th style={{color:'white', marginLeft:20,padding:20}}>Name</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Mobile</th>
    <th style={{color:'white', marginLeft:20,padding:20}}>Aadhar</th>
    </tr>

    {Lineman.map((item)=>{
      let temp= item.Aadhar;
    return(<>

<tr id={item.Aadhar} style={{marginTop:30, padding:20}} >
    <td style={{color:'white', marginLeft:20,padding:20}}>{item.Name}</td>
    <td style={{color:'white', marginLeft:20,padding:20}}> {item.Mobile}</td>
    <td style={{color:'white', marginLeft:20,padding:20}}>{item.Aadhar}</td>
 
    <button type="button"   class="btn btn-dark" style={{backgroundColor:'white', width:90, color:'black', marginLeft:20,  marginTop:20 }} key={item.Aadhar} onClick={()=>handleDelete(item.Aadhar)}>Delete </button>

</tr>
    </>);


    })}
    </table>
    </>
);

}


 const  DisplayLineman=()=>
{
 
return(<>    <h5 style={{textAlign:'center',  color:'white' , marginTop:30}}>Display Lineman Details</h5> <div style={{ padding:60,border:3, width:'40%', borderStyle:'solid', borderColor:'white', marginTop:10, display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}} > 
  
  {Lineman!=''?<Display/>:null }
  <button type="button" class="btn btn-dark mt-" style={{backgroundColor:'white', color:'black', marginTop:10, width:100}} onClick={handleDisplay}>Display </button>
 
    
 </div>

</>)

}

const handleName=(e)=>
{

    setName(e.target.value)
}
const handlePassword=(e)=>
{

    setPassword(e.target.value)
}
const handleAadhar=(e)=>
{

    setAadhar(e.target.value)
} 
const handleMobile=(e)=>
{

    setMobile(e.target.value);
} 



    const handleAdd= async()=>
    {
    
        await axios.post('http://localhost:8080/add_lineman',
        {
          mobile:mobile,
          password:password,
          name:name,
          aadhar:aadhar,
          JEid:JEid,
          
        }).then((response)=>{
          
  if(response.status==200)    
        {
      
    
          if(response.data.message==='Added')
          {
        
             alert("Lineman Added successfully")
             handleDisplay();
           }
       else{
     ;
            if(response.data.message==='Exist')
            {
            
             alert("Lineman already Exist");
            }
            else
            {
         
            alert("Error Occured. Please try again");
            }
            }
        }
         
          
        }).catch((error)=>{console.log(error)});
        

    
    
    
    }
    


    return(<>
    <div style={{backgroundColor:'#342D7E', height:'100%', }}>
    <div class='container' style={{display:'flex', alignItems:'center', flexDirection:'column',}} >
    <h5 style={{textAlign:'center',  color:'white' , marginTop:20}}>Add Lineman  </h5>
    <form style={{width:"40%", marginTop:20 , padding:60,border:3, borderStyle:'solid', borderColor:'white'}}>

  <div class="form-group mt-1" >

    <label for="txtName" style={{color:'white'}}>Name</label>
    <input type="text" class="form-control" id="txtName"  placeholder="Enter Nmame" onChange={handleName} style={{marginTop:10}}/>
   
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1"  style={{color:'white'}}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={handlePassword} style={{marginTop:10}}/>
  </div>
  <div class="form-group mt-3">
    <label for="txtAadhar"  style={{color:'white'}}>Aadhar</label>
    <input type="text" class="form-control" id="txtAadhar" placeholder="Aadhar No" onChange={handleAadhar} style={{marginTop:10}}/>
  </div>
  <div class="form-group mt-3">
    <label for="txtmobile"  style={{color:'white'}}>Mobile</label>
    <input type="number" class="form-control" id="txtMobile" placeholder="Mobile No" onChange={handleMobile} style={{marginTop:10}}/>
  </div>
 
  <button type="button" class="btn btn-primary mt-5" style={{ backgroundColor:'white',width:120, color:'black', }} onClick={handleAdd}>Add Lineman</button>
</form>
    
<DisplayLineman/>

    </div>
    </div>
    </>);
}

export default Add_Lineman;