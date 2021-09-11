import React from 'react';
import doctors from '../../../images/doctor.png';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Doctor from '../Doctor/Doctor';


const ourDoctors = [
    {
        id: 1,
        img: doctors,
        name: 'Dr.Caudi',
        icon: faPhone,
        phone: '+61 452 200 126'
    },
    {
        id: 2,
        img: doctors,
        name: 'Dr.Caudi',
        icon: faPhone,
        phone: '+61 452 200 126'
    },
    {
        id: 3,
        img: doctors,
        name: 'Dr.Caudi',
        icon: faPhone,
        phone: '+61 452 200 126'
    }
]

const Doctors = () => {
    return (
        <section>
            <div className="container">
                <h3 className="text-center pt-5" style={{color:'#0fcfec' , fontWeight:'bold'}}>Our Doctors</h3>
                <div className="row">
                    {
                        ourDoctors.map(doctors => <Doctor doctors={doctors} key={doctors.id}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;