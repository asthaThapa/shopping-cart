import { ProductPreview } from "./ProductPreview";
import men from '../assets/images/men-01.jpg'
export const LatestTrend = () => {
    return (
        <>
            <section class="section" id="men">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Men's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="men-item-carousel">
                                <div class="owl-men-item owl-carousel">
                                    <ProductPreview display={men} title="Classic Spring" price='$120.00' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}