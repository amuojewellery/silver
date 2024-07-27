import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import BRakhi from "../BRakhi";

function createProduct(BRakhi) {
  return (
    <Product
      id={BRakhi.id}
      prodId = {BRakhi.prodId}
      name={BRakhi.name}
      modalBox={BRakhi.modalBox}
      oldP={BRakhi.oldP}
      currP={BRakhi.currP}
      category={BRakhi.category}
      img1={BRakhi.img1}
      
    />
  );
}
function createModal(BRakhi) {
  return (
    <Modal
      id={BRakhi.id}
      prodId = {BRakhi.prodId}
      name={BRakhi.name}
      modalId={BRakhi.modalId}
      oldP={BRakhi.oldP}
      currP={BRakhi.currP}
      category={BRakhi.category}
      weight={BRakhi.weight}
      img1={BRakhi.img1}
      img2={BRakhi.img2}
      img3={BRakhi.img3}
      img4={BRakhi.img4}
      carouselId ={BRakhi.carouselId}
      carousel ={BRakhi.carousel}
    />
  );
}

function BRakhiApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Budget Rakhi</h2>
                                    </div>
                                    <div class="container">
                                    {BRakhi.map(createProduct)}
                                    
                                    </div>
    </section> 
    {BRakhi.map(createModal)}
    <Footer/>
    </div>
  );
}

export default BRakhiApp;
