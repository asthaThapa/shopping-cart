export const ProductHeader = ({ title, description }) => {
    return (
        <div class="page-heading" id="top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-content">
                            <h2>{title}</h2>
                            <span>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}