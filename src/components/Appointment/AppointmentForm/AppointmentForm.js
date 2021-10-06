import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


const modalStyle = {
    width: "500px",
    border: "1px solid lightGrey",
    outlineColor: 'rgb(68, 149, 255)',
    borderRadius: "5px",
};



const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        
        fetch('http://localhost:5500/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({data})
        })
        // .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })


        
    }

    return (
        <div >
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="py-5 px-3">
                    <div className=" text-center mb-5">
                        <h3 className="App-link">{appointmentOn}</h3>
                        <small>On {date.toDateString()}</small>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="from-group">
                            <input style={modalStyle} className="p-2 mt-0" placeholder="Your Name" {...register("name", { required: true })} /> <br />
                            {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                        </div>

                        <div className="from-group">
                            <input style={modalStyle} className="p-2 mt-4" placeholder="Phone Number" {...register("phone", { required: true })} /> <br />
                            {errors.phone && <span style={{ color: "red" }}>This field is required</span>}
                        </div>

                        <div className="from-group">
                            <input style={modalStyle} className="p-2 mt-4" placeholder="Email" {...register("email", { required: true })} /> <br />
                            {errors.email && <span style={{ color: "red" }}>This field is required</span>}
                        </div>

                        <div className="from-group d-flex justify-content-between mt-4">
                            <div>
                                <select style={{ outlineColor: "rgb(68, 149, 255)", border: "1px solid lightGrey" }} className="p-2" name="gender" id="" {...register("gender", { required: true })}>
                                    <option disabled={true} value="Not Set">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Not Set">Other</option>
                                </select>
                            </div>
                            <div>
                                <input style={{ outlineColor: "rgb(68, 149, 255)", border: "1px solid lightGrey", width: "150px" }} className="p-2" placeholder="Your Age" type="number" {...register("age", { required: true })} /> <br />
                                {errors.age && <span style={{ color: "red" }}>This field is required</span>}
                            </div>
                            <div>
                                <input style={{ outlineColor: "rgb(68, 149, 255)", border: "1px solid lightGrey", width: "150px" }} className="p-2" placeholder="Weight" type="number" {...register("weight", { required: true })} /> <br />
                                {errors.weight && <span style={{ color: "red" }}>This field is required</span>}
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <input className="button py-2 px-5 mt-4" type="submit" />
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default AppointmentForm;