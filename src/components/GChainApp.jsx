import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Gchain from "../Gchain";

function createProduct(Gchain) {
  return (
    <Product
      id={Gchain.id}
      prodId = {Gchain.prodId}
      name={Gchain.name}
      modalBox={Gchain.modalBox}
      oldP={Gchain.oldP}
      currP={Gchain.currP}
      category={Gchain.category}
      img1={Gchain.img1}
      boxName={Gchain.boxName}

    />
  );
}
function createModal(Gchain) {
  return (
    <Modal
      id={Gchain.id}
      prodId = {Gchain.prodId}
      name={Gchain.name}
      modalId={Gchain.modalId}
      oldP={Gchain.oldP}
      currP={Gchain.currP}
      category={Gchain.category}
      weight={Gchain.weight}
      img1={Gchain.img1}
      img2={Gchain.img2}
      img3={Gchain.img3}
      img4={Gchain.img4}
      carouselId ={Gchain.carouselId}
      carousel ={Gchain.carousel}
      size = {Gchain.size}

    />
  );
}

function GChainApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Gents Chain</h2>
                                    </div>
                                    <div class="container">
                                    {Gchain.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Gchain.map(createModal)}
    <Footer/>
    </div>
  );
}

export default GChainApp;
