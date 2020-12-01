import React ,{useState, useEffect} from 'react';
import protect from '../utils/protect';
import Navbar from '../components/Navbar';
import useForm from '../hooks/useForm';
import axios from 'axios';
import payload from "../utils/payload";
import { useHistory } from 'react-router-dom';


function User(){
    const history = useHistory();
    const userInfoID = payload().id;
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

    const sendData = (data) =>{

        if( data.password === data.password_confirm){
            delete data.password_confirm
            const token = window.localStorage.getItem('token')
            const config = {
                headers:{
                    Authorization: `JWT ${token}` 
                }
            }
            axios.patch(`https://ecomerce-master.herokuapp.com/api/v1/user/${userInfoID}`,data,config)
                .then((resp) =>{
                    console.log(resp.status)
                    //console.log(response.data)
                    alert("You have successfully changed your user's information");
                    //const { token } =response.data;
                    //const pato = response.data.token;
                    //session.storage
                    //local.storage
                    //window.localStorage.setItem("token", token) ;// esto agrega algo nuevo al local storag
                    history.push('/');
                })
                .catch((error) =>{
                    alert(error.response.data.message);
                })
        }else{
            alert("Passwords no coinciden")
        }

    }

    useEffect(()=>{
        obtainData();
    },[obtainData()])

    const { inputs, handleInputChange, handleSubmit } = useForm(sendData,{});
    return (
        <form onSubmit={handleSubmit}>
            <Navbar />
            {userInfo === undefined ? 
                <h3>
                    Loading...
                </h3>
            :
                <div className="container mt-5">
                    <h3>Users current information</h3>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">First Name: {userInfo.first_name}</label>
                            <input type="text" 
                            value={inputs.first_name}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="first_name" 
                            id="first_name"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Last Name: {userInfo.last_name}</label>
                            <input type="text" 
                            value={inputs.last_name}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="last_name" 
                            id="last_name"
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">E-mail: {userInfo.email}</label>
                            <input type="email" 
                            value={inputs.email}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="email" 
                            id="email"
                    
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Enter New Password</label>
                            <input type="password" 
                            value={inputs.password}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="password" 
                            id="password"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Confirm New Password</label>
                            <input type="password" 
                            value={inputs.password_confirm}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="password_confirm" 
                            id="confirm"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Birth Date: {userInfo.birth_date}</label>
                            <input type="date" 
                            value={inputs.birth_date}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="birth_date" 
                            id="birth_date"/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="">Gender -M/F/X: {userInfo.gender}</label>
                            <input type="text" 
                            value={inputs.gender}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="gender" 
                            id="gender"/>
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-dark">Edit Info</button>
                    </div>
                </div>
            </div>
            }
            
        </form>
    )
}

export default protect(User);