import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
//import payload from "../../utils/payload";
import "./Navbar.scss";
import axios from 'axios';
import Searcher from '../Searcher/Searcher';

function Navbar() {
   // const userID = payload().id;
    const [userInfo, setUserInfo] = useState();

    const obtainData = () =>{
        //console.log(userInfoID)
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}` 
            }
        }
        //console.log(config)
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/user/me`,config)
            .then((response)=>{
                if(response.status===200){
                    console.log("Information of the user has been received", response.data.user)
                    setUserInfo(response.data.user);
                }else{
                    console.log("please check your credentials",response)
                }
            })
            .catch(()=>{
                console.log("Please check your configuration")
            })
    }

    useEffect(()=>{
        obtainData();
    },[obtainData()])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
            Super e-market
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="csollapse navbar-collapse" id="navbarNav">
            {//console.log(user)
            }
            {userInfo ? (
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/user">
                    Welcome {userInfo.first_name} !
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/logout">
                    Logout
                </Link>
                </li>
                <li className="nav-item">
                    <Searcher/>
                </li>
            </ul>
            ) : (
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/login">
                    Login
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/signup">
                    Signup
                </Link>
                </li>
                <li className="nav-item">
                    <Searcher/>
                </li>
            </ul>
            )}
        </div>
        </nav>
    );
}

export default Navbar;