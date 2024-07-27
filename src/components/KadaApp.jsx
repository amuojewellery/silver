import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Kada from "../Kada";

function createProduct(Kada) {
  return (
    <Product
      id={Kada.id}
      prodId = {Kada.prodId}
      name={Kada.name}
      modalBox={Kada.modalBox}
      oldP={Kada.oldP}
      currP={Kada.currP}
      category={Kada.category}
      img1={Kada.img1}
      img2={Kada.img2}
      img3={Kada.img3}
      img4={Kada.img4}
      boxName={Kada.boxName}

    />
  );
}
function createModal(Kada) {
  return (
    <Modal
      id={Kada.id}
      prodId = {Kada.prodId}
      name={Kada.name}
      modalId={Kada.modalId}
      oldP={Kada.oldP}
      currP={Kada.currP}
      category={Kada.category}
      weight={Kada.weight}
      img1={Kada.img1}
      img2={Kada.img2}
      img3={Kada.img3}
      img4={Kada.img4}
      carouselId ={Kada.carouselId}
      carousel ={Kada.carousel}
      size = {Kada.size}

    />
  );
}

function KadaApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Men's Kada</h2>
                                    </div>
                                    <div class="container">
                                    {Kada.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Kada.map(createModal)}
    <Footer/>
    </div>
  );
}

export default KadaApp;
