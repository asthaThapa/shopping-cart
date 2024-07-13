import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { LatestTrend } from "../components/LatestTrend";
import leftBanner from "../assets/images/left-banner-image.jpg";
import bannerRight01 from "../assets/images/baner-right-image-01.jpg";
import bannerRight02 from "../assets/images/baner-right-image-02.jpg";
import bannerRight03 from "../assets/images/baner-right-image-03.jpg";
import bannerRight04 from "../assets/images/baner-right-image-04.jpg";

export const Home = () => {
    return (
        <>
            <Nav />

            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>We Are Hexashop</h4>
                                        <span>Awesome, clean &amp; creative HTML5 Template</span>
                                        <div class="main-border-button">
                                            <a href="#">Purchase Now!</a>
                                        </div>
                                    </div>
                                    <img src={leftBanner} />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Women</h4>
                                                    <span>Best Clothes For Women</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Women</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerRight01} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Men</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerRight02} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Kids</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Kids</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerRight03} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerRight04} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LatestTrend />
            <Footer />
        </>
    )
}