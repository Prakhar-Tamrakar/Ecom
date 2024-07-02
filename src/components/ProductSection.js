import React from 'react';

const ProductCart = ({ product }) => {
    const { imgSrc, altText, brand, title, stars, price } = product;
    return (
        <div className="product-cart">
            <img src={imgSrc} alt={altText} />
            <span>{brand}</span>
            <h4>{title}</h4>
            <div className="stars">
                {[...Array(stars)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                ))}
            </div>
            <h4 className="price">{price}</h4>
            <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
        </div>
    );
};

const ProductSection = ({ products }) => {
    return (
        <section className="product-section section-p1">
            <h1>Featured Products</h1>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-collection">
                {products.map((product, index) => (
                    <ProductCart product={product} key={index} />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
    