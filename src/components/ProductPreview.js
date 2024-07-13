import React from 'react';

export const ProductPreview = ({ display, title, price }) => {
    return (
        <div class="col-lg-4">
            <div class="item">
                <div class="thumb">
                    <div class="hover-content">
                        <ul>
                            <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                            <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <img className="productImg" src={display} />
                </div>
                <div class="down-content">
                    <h4>{title}</h4>
                    <span>${price}</span>
                    <ul class="stars">
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
