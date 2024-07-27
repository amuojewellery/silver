import React from "react";

function Banner(){
    return(
        <section class="banner_section banner_black">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single_banner">
                            <div class="banner_thumb">
                                <a href="./Lchain.html"><img class="img" src="./chainIMG/WhatsApp Image 2024-07-14 at 17.22.22_0cef86b9.jpg" alt="banner1"/></a>
                                <div class="banner_content">
                                    <p>New Design</p>
                                    <h2>Light Women Chain</h2>
                                    <span>Sale 25% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single_banner">
                            <div class="banner_thumb">
                                <a href="./Gring.html"><img class="img" src="Gring/4.1.jpg" alt="banner2"/></a>
                                <div class="banner_content">
                                    <p>New Design</p>
                                    <h2>Men Rings</h2>
                                    <span>Sale 15% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single_banner">
                            <div class="banner_thumb">
                                <a href="./locket.html"><img class="img" src="./pendant/11.jpg" alt="banner3"/></a>
                                <div class="banner_content">
                                    <p>Featured Lockets</p>
                                    <h2>Divine Lockets</h2>
                                    <span>Sale 15% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;