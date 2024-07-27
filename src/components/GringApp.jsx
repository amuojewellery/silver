import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Gring from "../Gring";

function createProduct(Gring) {
  return (
    <Product
      id={Gring.id}
      prodId = {Gring.prodId}
      name={Gring.name}
      modalBox={Gring.modalBox}
      oldP={Gring.oldP}
      currP={Gring.currP}
      category={Gring.category}
      img1={Gring.img1}
      boxName={Gring.boxName}

    />
  );
}
function createModal(Gring) {
  return (
    <Modal
      id={Gring.id}
      prodId = {Gring.prodId}
      name={Gring.name}
      modalId={Gring.modalId}
      oldP={Gring.oldP}
      currP={Gring.currP}
      category={Gring.category}
      weight={Gring.weight}
      img1={Gring.img1}
      img2={Gring.img2}
      img3={Gring.img3}
      img4={Gring.img4}
      carouselId ={Gring.carouselId}
      carousel ={Gring.carousel}
      size = {Gring.size}

    />
  );
}

function GringApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Gents Rings</h2>
                                    </div>
                                    <div class="container">
                                    {Gring.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Gring.map(createModal)}
    <Footer/>
    </div>
  );
}

export default GringApp;
