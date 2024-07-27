import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Lchain from "../Lchain";

function createProduct(Lchain) {
  return (
    <Product
      id={Lchain.id}
      prodId = {Lchain.prodId}
      name={Lchain.name}
      modalBox={Lchain.modalBox}
      oldP={Lchain.oldP}
      currP={Lchain.currP}
      category={Lchain.category}
      img1={Lchain.img1}
      boxName={Lchain.boxName}

    />
  );
}
function createModal(Lchain) {
  return (
    <Modal
      id={Lchain.id}
      prodId = {Lchain.prodId}
      name={Lchain.name}
      modalId={Lchain.modalId}
      oldP={Lchain.oldP}
      currP={Lchain.currP}
      category={Lchain.category}
      weight={Lchain.weight}
      img1={Lchain.img1}
      img2={Lchain.img2}
      img3={Lchain.img3}
      img4={Lchain.img4}
      carouselId ={Lchain.carouselId}
      carousel ={Lchain.carousel}
      size = {Lchain.size}

    />
  );
}

function LChainApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Ladies Chain</h2>
                                    </div>
                                    <div class="container">
                                    {Lchain.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Lchain.map(createModal)}
    <Footer/>
    </div>
  );
}

export default LChainApp;
