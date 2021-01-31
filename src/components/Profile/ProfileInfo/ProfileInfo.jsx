 import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src='https://img3.goodfon.ru/original/320x240/f/e4/kot-koshka-lezha-morda-igrushki.jpg'></img>    
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;
