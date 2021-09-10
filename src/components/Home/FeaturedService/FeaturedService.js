import React from 'react';
import feature from '../../../images/features.png';


const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pt-5 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={feature} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br /> Care, on your Terms</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum sequi deleniti corporis voluptates animi maiores iure temporibus dolorum praesentium autem voluptatem, sapiente accusamus recusandae tempora libero, illo minus quos iste nesciunt quas molestiae, facere tenetur enim. Hic maxime dicta maiores beatae aut quis quasi, iure illo molestiae dolorem ipsa omnis earum non unde, porro atque ullam. Fugiat eius sunt mollitia voluptas, assumenda illo blanditiis labore. In quibusdam deserunt ipsum omnis odit eaque, est suscipit!
                        </p>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;