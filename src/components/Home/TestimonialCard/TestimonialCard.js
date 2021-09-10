import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { description, name, from, img } = testimonial;
    return (
        <div className="col-md-4">
            <div className="card shadow-sm my-3 py-5 px-2">
                <div className="card-body">
                    <p className="card-text text-justify">{description}</p>
                </div>
                <div className="card-footer mt-3 d-flex align-item-center">
                    <img src={img} alt="" className="mx-3" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;