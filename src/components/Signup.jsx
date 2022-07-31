import React from 'react';
import styled from 'styled-components';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
const Signup = () => {

    
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
    //web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDe_iZqGbovoxmAEQaVcC1GjkD_YsJaW8c",
        authDomain: "auth-3183c.firebaseapp.com",
        projectId: "auth-3183c",
        storageBucket: "auth-3183c.appspot.com",
        messagingSenderId: "991241803536",
        appId: "1:991241803536:web:7682358646cf5c2c0db795"
    };
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password,)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert(`User ragister successfully `)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Please enter right email and password`);
            });
        // console.log(email, password);
    }

    

    // Initialize Firebase


    return (
        <Section id="signup">
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
                <button onClick={() => handleSubmit()} type="submit" className="btn">SignUp</button>
            </div>
        </div>
        </Section>
    );
}

export default Signup;


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
