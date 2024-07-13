export const OrderSection = ({ image, title, description, price }) => {
    return (
        <section className="section" id="product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="left-images">
                            <img className="orderProductImg" src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <h4>{title}</h4>
                            <span className="price">${price}</span>
                            <ul className="stars">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span>{description}</span>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>No. of Orders</h6>
                                </div>
                                <div className="right-content">
                                    <div className="quantity buttons_added">
                                        <input type="button" value="-" className="minus" />
                                        <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" className="input-text qty text" size="4" pattern="" inputMode="" />
                                        <input type="button" value="+" className="plus" />
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h4>Total: $210.00</h4>
                                <div className="main-border-button"><a href="#">Add To Cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
