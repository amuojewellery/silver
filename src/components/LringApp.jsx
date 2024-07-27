import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Lring from "../Lring";

function createProduct(Lring) {
  return (
    <Product
      id={Lring.id}
      prodId = {Lring.prodId}
      name={Lring.name}
      modalBox={Lring.modalBox}
      oldP={Lring.oldP}
      currP={Lring.currP}
      category={Lring.category}
      img1={Lring.img1}
      boxName={Lring.boxName}
    />
  );
}
function createModal(Lring) {
  return (
    <Modal
      id={Lring.id}
      prodId = {Lring.prodId}
      name={Lring.name}
      modalId={Lring.modalId}
      oldP={Lring.oldP}
      currP={Lring.currP}
      category={Lring.category}
      weight={Lring.weight}
      img1={Lring.img1}
      img2={Lring.img2}
      img3={Lring.img3}
      img4={Lring.img4}
      carouselId ={Lring.carouselId}
      carousel ={Lring.carousel}
      size = {Lring.size}
    />
  );
}

function LringApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Ladies Ring</h2>
                                    </div>
                                    <div class="container">
                                    {Lring.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Lring.map(createModal)}
    <Footer/>
    </div>
  );
}

export default LringApp;
