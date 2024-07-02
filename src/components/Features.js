import React from 'react';

const Features = ({ features }) => {
    return (
        <section id="features" className="section-p1">
            {features.map((feature, index) => (
                <div className="f-box" key={index}>
                    <img src={feature.imgSrc} alt={feature.altText} />
                    <h6>{feature.title}</h6>
                </div>
            ))}
        </section>
    );
};

export default Features;
