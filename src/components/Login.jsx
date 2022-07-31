import React from 'react';
import {useState} from "react"
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    


    const handleInputChange = (e) => {
        const { id, value } = e.target;
       
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        

    }

    const auth = getAuth();
    const handleSubmit=()=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Login successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Please enter right email and password`);
  });
    }

    return (
        <Section  id="login"> 
        <div className="form">
        <div className="form-body">
            
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
            </div>
           
        </div>
        <div class="footer">
            <button onClick={() => handleSubmit()} type="submit" className="btn">LogIn</button>
        </div>
        </div>
        </Section>
    );
}

export default Login;

const Section=styled.section`
.form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color:aliceblue;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    width:100%;
    &:hover{
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    .form-body{
       .email{
           .form__label{
            font-size: 2rem;
            font-weight: 900;
           }
           .form__input{
            margin-left:2rem;
            border-radius: 0.5rem;
            width:24rem;
            height:3rem;
           }   
       }
       .password{
           .form__label{
            font-size: 2rem;
            font-weight: 900;
           }
           .form__input{
            margin-left:2rem;
            border-radius: 0.5rem;
            width:20rem;
            height:3rem;
           }
       }
    }
    .footer{
        .btn{
            border:solid cyan ;
            width:10rem;
            height:3rem;
            margin-top:2rem;
            font-weight: 900;
            &:hover{
                border:white;
                background-color:cyan;
                text-color:black;
            }
        }
    }
}
`;

