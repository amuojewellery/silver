import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import FRakhi from "../FRakhi";

function createProduct(FRakhi) {
  return (
    <Product
      id={FRakhi.id}
      prodId = {FRakhi.prodId}
      name={FRakhi.name}
      modalBox={FRakhi.modalBox}
      oldP={FRakhi.oldP}
      currP={FRakhi.currP}
      category={FRakhi.category}
      img1={FRakhi.img1}
      
    />
  );
}
function createModal(FRakhi) {
  return (
    <Modal
    id={FRakhi.id}
    prodId = {FRakhi.prodId}
    name={FRakhi.name}
    modalBox={FRakhi.modalBox}
    oldP={FRakhi.oldP}
    currP={FRakhi.currP}
    category={FRakhi.category}
    img1={FRakhi.img1}
      img2={FRakhi.img2}
      img3={FRakhi.img3}
      img4={FRakhi.img4}
      carouselId ={FRakhi.carouselId}
      carousel ={FRakhi.carousel}
      modalId={FRakhi.modalId}
      weight={FRakhi.weight}


    />
  );
}

function FRakhiApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Fancy Rakhi</h2>
                                    </div>
                                    <div class="container">
                                    {FRakhi.map(createProduct)}
                                    
                                    </div>
    </section> 
    {FRakhi.map(createModal)}
    <Footer/>
    </div>
  );
}

export default FRakhiApp;
