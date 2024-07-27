import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Locket from "../Locket";

function createProduct(Locket) {
  return (
    <Product
      id={Locket.id}
      prodId = {Locket.prodId}
      name={Locket.name}
      modalBox={Locket.modalBox}
      oldP={Locket.oldP}
      currP={Locket.currP}
      category={Locket.category}
      img1={Locket.img1}
      boxName={Locket.boxName}
    />
  );
}
function createModal(Locket) {
  return (
    <Modal
      id={Locket.id}
      prodId = {Locket.prodId}
      name={Locket.name}
      modalId={Locket.modalId}
      oldP={Locket.oldP}
      currP={Locket.currP}
      category={Locket.category}
      weight={Locket.weight}
      img1={Locket.img1}
      img2={Locket.img2}
      img3={Locket.img3}
      img4={Locket.img4}
      carouselId ={Locket.carouselId}
      carousel ={Locket.carousel}
      size = {Locket.size}
    />
  );
}

function LocketApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Divine Lockets</h2>
                                    </div>
                                    <div class="container">
                                    {Locket.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Locket.map(createModal)}
    <Footer/>
    </div>
  );
}

export default LocketApp;
