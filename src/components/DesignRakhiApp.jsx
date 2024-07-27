import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import DesignRakhi from "../DesignRakhi";

function createProduct(DesignRakhi) {
  return (
    <Product
      id={DesignRakhi.id}
      prodId = {DesignRakhi.prodId}
      name={DesignRakhi.name}
      modalBox={DesignRakhi.modalBox}
      oldP={DesignRakhi.oldP}
      currP={DesignRakhi.currP}
      category={DesignRakhi.category}
      img1={DesignRakhi.img1}
      
    />
  );
}
function createModal(DesignRakhi) {
  return (
    <Modal
      id={DesignRakhi.id}
      prodId = {DesignRakhi.prodId}
      name={DesignRakhi.name}
      modalId={DesignRakhi.modalId}
      oldP={DesignRakhi.oldP}
      currP={DesignRakhi.currP}
      category={DesignRakhi.category}
      weight={DesignRakhi.weight}
      img1={DesignRakhi.img1}
      img2={DesignRakhi.img2}
      img3={DesignRakhi.img3}
      img4={DesignRakhi.img4}
      carouselId ={DesignRakhi.carouselId}
      carousel ={DesignRakhi.carousel}
    />
  );
}

function DesignRakhiApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Designer Rakhi</h2>
                                    </div>
                                    <div class="container">
                                    {DesignRakhi.map(createProduct)}
                                    
                                    </div>
    </section> 
    {DesignRakhi.map(createModal)}
    <Footer/>
    </div>
  );
}

export default DesignRakhiApp;
