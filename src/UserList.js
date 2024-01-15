import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import usericon from './images/utilisateur.png'





const UserList = () => {

    const [users, setusers] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const user = await axios.get('https://jsonplaceholder.typicode.com/users')

                setusers(user.data)
            } catch (error) {

                console.log("Les données n'ont pas été envoyer à cause d'une erreur qui est survenue ")
            }
        }

        fetchData()
    }, [])
    return (


        <div className="myList">
            {
                users.map((user, index) =>
                (

                    
                        <div className="main">
                            <div className="profile_img">

                                <div>
                                    <img src={usericon} style={{ width: "40px", marginLeft: "1rem" }} />
                                </div>

                                <div className="info_user">
                                    <div style={{ fontWeight: "bold" }}>{user.name}</div>
                                    <div> {user.email}</div>
                                </div>

                            </div>



                            <div>
                                <span style={{color:"purple"}}>show profiles</span>
                            </div>
                        </div>
                    


                )


                )


            }


        </div>
    )
}


export default UserList;