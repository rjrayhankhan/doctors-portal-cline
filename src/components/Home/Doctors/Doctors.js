import React, { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
   const [doctors, setDoctors] = useState([]);

   useEffect(() => {
        const url = 'http://localhost:5500/doctors';
        fetch(url)
        .then(res => res.json())
        .then(data => setDoctors(data))
   }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;