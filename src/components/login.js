import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import axios from 'axios';
//import Homepage from './homepage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Homepage from './homepage.js';
import {useNavigate } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
const Server= "";
var temp={};




const Login=()=>
{
  const [login, setLogin]= useState("");  
  const [Result, setResult]= useState("default value");
  const navigate = useNavigate();
  const [error, setError]= useState(true);
    const [success,setSuccess]= useState(0);

const [userid, setUserid]= useState("");
const [password, setPassword]= useState("");

const handleUserid=(event)=>
{
    setUserid(event.target.value);
   // console.log(event.target.value);
} 
const handlePassword=(event)=>
{
    setPassword(event.target.value);
   // console.log(event.target.value);
} 
const handleSubmit= async()=>
{
  
if(userid && password && login)
{

console.log("submit clicked");

await axios.post('http://localhost:8080/login',
{
  user:userid,
  pass:password,
  loginBy:login
  
}).then((response)=>{
  
if(response.status==200)    

  temp= response.data;
  console.log('here');
 console.log(temp.user.Role);
 if(temp.user.Role=="JE")
{
  navigate("/homepage/"+userid);
}
else
{
  //navigate("/homepage/"+userid);
}
  
}).catch((error)=>{console.log(error)});
}
else
{
alert('Please fill all details');

}
}



return (
<>
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div  className='container_login'>
<div className='header_login' >
</div>
<div className="body_login">
<div  className="login_div">
<h5 className='align_center mt-3'>Login Page</h5>
<div className='main'>
<div className="input-group width_20 mt-5 d-flex flex-column"  style={{alignItems:'center' }} >
<span style={{fontSize:13,}}><h6>User Id</h6></span>
<input type="text" class="form-control bord mt-1"  placeholder="Enter Your ID" onChange={handleUserid}  style={{width:'80%', height:45}} />
</div>
<div className="input-group mb- width_20 mt-4 d-flex flex-column" style={{alignItems:'center'}} >
  <span style={{fontSize:13}} ><h6>Password</h6> </span>

    <input type="Password" className="form-control border mt-2 items" placeholder="Enter Password" onChange={handlePassword} style={{width:'80%' ,height:45,alignItems:'center'}}/>

</div>
<div style={{display:'flex'}}>
<div class="form-check" style={{marginTop:30}}>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"   onChange={()=>setLogin('LM')}/>
  <label class="form-check-label" for="flexRadioDefault2">
Lineman
  </label>
</div>
<div class="form-check d-flex"  style={{marginTop:30, marginLeft:20}}>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onChange={()=>setLogin('JE')} />
  <label class="form-check-label" for="flexRadioDefault1" style={{marginLeft:10}}>
   Junior Engineer
  </label>
</div>
</div>

<button type="button" className="btn btn-primary mt-5 width_15 " style={{alignItems:'center',width:'80%' ,height:45, backgroundColor:'#342D7E'}} onClick={handleSubmit}>Submit</button>
<div className='d-flex'></div>


</div>


</div>
</div>

<div className="footer_login">
</div>

</div>

</>
);

}

export default Login;
