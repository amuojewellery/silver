import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Sawan from "../Sawan";

function createProduct(Sawan) {
  return (
    <Product
      id={Sawan.id}
      prodId = {Sawan.prodId}
      name={Sawan.name}
      modalBox={Sawan.modalBox}
      oldP={Sawan.oldP}
      currP={Sawan.currP}
      category={Sawan.category}
      img1={Sawan.img1}
      boxName={Sawan.boxName}
    />
  );
}
function createModal(Sawan) {
  return (
    <Modal
      id={Sawan.id}
      prodId = {Sawan.prodId}
      name={Sawan.name}
      modalId={Sawan.modalId}
      oldP={Sawan.oldP}
      currP={Sawan.currP}
      category={Sawan.category}
      weight={Sawan.weight}
      img1={Sawan.img1}
      img2={Sawan.img2}
      img3={Sawan.img3}
      img4={Sawan.img4}
      carouselId ={Sawan.carouselId}
      carousel ={Sawan.carousel}
      size = {Sawan.size}
    />
  );
}

function  SawanApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Sawan Collection</h2>
                                    </div>
                                    <div class="container">
                                    {Sawan.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Sawan.map(createModal)}
    <Footer/>
    </div>
  );
}

export default SawanApp;
