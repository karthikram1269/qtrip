import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate(); 
    const handleLogin = (event) => {
        event.preventDefault(); 
        const regName = window.sessionStorage.getItem("UserName");
        const regPass = window.sessionStorage.getItem("Password");

        if (userName === regName && password === regPass) {
            navigate("/"); 
        } else {
            alert("Invalid credentials!!  ...");
        }
    };

    return (
        <>
        <div className="logMain">
            <h1 id="allatTitle"style={{color:"coral",fontFamily:"sanserif"}}>PIXABAY</h1>
            <form onSubmit={handleLogin} id="loginForm">
              <div className="formContainer">
                <h3 id="loginTitle">LOGIN PAGE</h3>
                <table>
                  <tbody>
                    <tr>
                      <td><label htmlFor="uName">UserName : </label></td>
                      <td>
                        <input
                          type="text"
                          id="uName"
                          name="UserName"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          placeholder="Enter the UserName"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="psw">Password : </label></td>
                      <td>
                        <input
                          type="password"
                          name="Password"
                          id="psw"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter the password"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <input type="submit" id="loginSub" value="Login" />
                      </td>
                    </tr>
                    <tr id="lastCh">
                      <td>New user ?</td>
                      <td><a id="registerLink" href="/rgstr">REGISTER</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
        </div>

        <Footer />
        </>
    );
}
