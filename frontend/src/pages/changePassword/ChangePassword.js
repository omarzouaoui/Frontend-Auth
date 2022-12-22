import React, { useState } from 'react'
import { Card } from '../../components/card/Card'
import profileImg from "../../assets/avatarr.png"
import "./ChangePassword.scss"
import { PageMenu } from '../../components/PageMenu/PageMenu'

const initialState = {
    name:"Omar",
    email:"zouaouiomar@gmail.com",
    phone:"",
    bio:"",
    photo:"",   
    role:"",
    isVerified:false  
}

export const ChangePassword = () => {

    const [profile, setProfile] = useState(initialState)

    const handleImageChange = () =>{}
    const handleInputChange = ()=>{}

  return (
    <>
    <section>
        <div className='container'>
            <PageMenu/>
           <h2 className='--flex-center'>Change Password</h2>
           <div className='--flex-center profile'>
            <Card cardClass={"card"}>
                <>
                
                    <form>

                        <p>
                            <label>Change Photo :</label>
                            <input 
                            type="file" 
                            accept='image/*' 
                            name='image' 
                            onChange={handleImageChange} 
                            />
                        </p>

                        <p>
                            <label>Name :</label>
                            <input 
                            type="text" 
                            name='name' 
                            value={profile.name}
                            onChange={handleInputChange} 
                            />
                        </p>

                        <p>
                            <label>Email :</label>
                            <input 
                            type="email" 
                            name='email' 
                            value={profile.email}
                            onChange={handleInputChange} 
                            disabled
                            />
                        </p>

                        <p>
                            <label>Phone :</label>
                            <input 
                            type="text" 
                            name='phone' 
                            value={profile.phone}
                            onChange={handleInputChange} 
                            />
                        </p>

                        <p>
                            <label>Phone :</label>
                            <textarea
                            name='bio'
                            value={profile.bio}
                            onChange={handleInputChange}
                            cols="30"
                            rows="10"
                            placeholder='Your bio ...'
                            />
                        </p>

                        <button className='--btn --btn-primary --btn-block'>Update Profile</button>

                    </form>

                </>
            </Card>
            </div> 
        </div>
    </section>
    </>
  )
}