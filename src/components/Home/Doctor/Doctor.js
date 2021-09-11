import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Doctor = ({doctors}) => {
    const {img, name, icon, phone} = doctors;
    return (
        <div className="col-md-4 my-5">
            <img src={img} alt="" className="img-fluid" />
            <div className="doctors-body text-center my-4">
                <h5 style={{fontWeight:'bold'}}>{name}</h5>
                <div className="d-flex justify-content-center">
                    <FontAwesomeIcon style={{color:'#0fcfec'}} icon={icon}></FontAwesomeIcon>
                    <p className="text-secondary">{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;