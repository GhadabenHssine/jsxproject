import React from 'react'
import "../../App.css"
import img from '../img/122159705_101587405082512_3157829689756229921_n-removebg-preview.png'
import img1 from "../img/b74b7e15087c07a7182477d699c7a4df-removebg-preview.png"
const ProfilePhoto = () => {
    return (
        <div className='bloc'>
            <div className='boximg'>
                <img src={img} alt="photo" className='img1' />
                <img src={img1} alt="photo" id="sp" />
            </div></div>
    )
}

export default ProfilePhoto