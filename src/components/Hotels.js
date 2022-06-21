import logo from './logo.svg';
//import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
import profile2 from "./images/hotels.gif";

import './hotel.css'
import  { useState,useEffect } from 'react';
import{Link,useNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import Axios from "axios";


 

function App() {

    
    const [City, setCity]=useState('');
    const [Hotels, setHotels]=useState('');
    const [Rooms, setRooms]=useState('');
    const [Days, setDays]=useState('');
    const [Nights, setNights]=useState('');
    const [Lunch, setLunch]=useState('');
    const [Breakfast, setBreak]=useState('');
    const [Dinner, setDinner]=useState('');


    const [serrmsg,setAErrmsg]=useState('');
	const navigate=useNavigate();

    const [loginStatus, setLoginStatus] = useState("");



    const handleSubmition=(e)=>{
        e.preventDefault();
      
        if(!Hotels || !Rooms || !Days || !Nights ){
            alert("please fill All the field");
        }
        else if(Rooms<0||Rooms==0){
            alert("invalid no of travelers ") ;   
        }

        else if(Days<0||Days==0){
            alert("invalid no of Adults ") ;   
        }

        else if(Nights<0||Nights==0){
            alert("invalid no of Childerns");   
        }

        else{

            setAErrmsg("");
            navigate('/Cards');
    
            register();

        }
    }

    const register = () => {
        Axios.post("http://localhost:3001/Hotels", {
            City:"Margao",
           Hotels:Hotels,
            Rooms:Rooms,
            Days:Days,
            Nights:Nights,
            Lunch:Lunch,
            Breakfast:Breakfast,
            Dinner:Dinner,

        
        
         
          //password: passwordReg,
        }).then((response) => {
          console.log(response.data);
          setLoginStatus({message: "Personal Details is successfull"});
          console.log(loginStatus);
        });
      };

 

  return (

    
    
    <div className="UserDetails2">
      <i><b><h1> Goa Tour</h1></b></i>
      <div id="d0">
        
       
      
        <button id="home"><b>HOME</b></button>{'  '}
        <button id="gallery"><b>GALLERY</b></button>{'  '}
        <button id="about us"><b>ABOUT US</b></button>{'  '}
        <button id="signin"><b>SIGNIN</b></button>{'  '}
        

      </div>
      <div id="d4">
      <button id="PersonalDetails"><h3>PERSONAL DETAILS</h3></button>
        <button id="TravelDetails"><h3>TRAVEL DETAILS</h3></button>
        <button id="AccDetails"><h3>ACCOMODATION DETAILS</h3></button>
        <button id="ActivityDetails"><h3>ACTIVITY DETAILS</h3></button>
        


      </div>
      <br>
      </br><br></br><br></br>

     

      
      
      <div class="container" >
          <div class="row">
                <div class="col-lg">
                     <form class="needs-validation" novalidate>

                         
                     <div id="City">

                     
                        
                        
                    
                                
                                  
                     <div style={{  variant: "transparent", 
                                width:400,
                                paddingTop:50,
                                
                                }}>
                    <label for="transport"><i><h3>City</h3></i></label><br></br>
                    
                    <Dropdown>
                        <Dropdown.Toggle style={{  backgroundColor: "white", 
                                color:"Black",
                                width:465,
                                height:30,
                                
                                
                                
                                }} 
                                   >
                        Margao
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item value="Margao" onChange={e=>setCity(e.target.value)} id="01" href="/Hotels" >
                            Margao
                        </Dropdown.Item>
                        <Dropdown.Item id="02" href="/Hotels1">
                            Panjim
                        </Dropdown.Item>
                        
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                                
                        </div>

                       

                     
                        <div id="hotels">
                                
                                <label for="transport"><i><h3>Hotels</h3></i></label><br></br>
                                <select id="hotels"onChange={e=>setHotels(e.target.value)}  required >
                                            <option value="0"><b>Select Hotels</b></option>
                                             <option value="Lalit"><b>Lalit</b></option>
                                            <option value="Xero degree"><b>Xero degree</b></option>
                                           
                        
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                                
                        </div>

                     

                      

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Rooms</i></h3></label>
                            <input type="number" class="form-control" id="No_of_Rooms"  aria-describedby="emailHelp" placeholder="No Of Rooms" onChange={e=>setRooms(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Days</i></h3></label>
                            <input type="number" class="form-control" id="No_of_Days" aria-describedby="emailHelp" placeholder="No Of Days" onChange={e=>setDays(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                 

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>No. of Nights:</i></h3></label>
                            <input type="number" class="form-control" id="No_of_Nights" aria-describedby="emailHelp" placeholder="No. of Nights"  onChange={e=>setNights(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


              

                        
                        <div class="Breakfast">
                            
                            <input type="radio" id="Breakfast" name="breakfast"  value="Yes"  onChange={e=>setBreak(e.target.value)} class="custom-control-input"/>
                            <label class="custom-control-label"  for="customRadio1"><h4>Break Fast</h4></label>

                        </div>

                          
                        <div class="lunch">
                            
                            <input type="radio" id="lunch" name="lunch"  value="Yes"  onChange={e=>setLunch(e.target.value)}  class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio1"><h4>Lunch</h4></label>

                        </div>

                          
                        <div class="Dinner">
                            
                            <input type="radio" id="Dinner" name="dinner"  Value="Yes" onChange={e=>setDinner(e.target.value)}   class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio1"><h4>Dinner</h4></label>

                        </div>




                        




                  
                        
                       <br></br><br></br>

                       <h6>{serrmsg}</h6>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary"  onClick={handleSubmition} >Next</button>
                    </form> 

                    </div> 



          

      
            <div class="col-lg">
            <img src={profile2} alt="profile" className="profile"/>
            </div>
        </div>
      

    </div>

   
    </div>

    

      

      );
}

export default App;