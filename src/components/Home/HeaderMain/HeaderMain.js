import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    const history = useHistory();
    const handleClick = () => {
        const url = "/appointment";
        history.push(url)
    }

    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: "#3A4256"}}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur suscipit vitae neque non atque ex, asperiores omnis est. Delectus.</p>
                <button onClick={handleClick} className="py-2 px-3 button">GET APPOINTMENT</button>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;