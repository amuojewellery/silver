import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Lpayal from "../Lpayal";

function createProduct(Lpayal) {
  return (
    <Product
      id={Lpayal.id}
      prodId = {Lpayal.prodId}
      name={Lpayal.name}
      modalBox={Lpayal.modalBox}
      oldP={Lpayal.oldP}
      currP={Lpayal.currP}
      category={Lpayal.category}
      img1={Lpayal.img1}
      
    />
  );
}
function createModal(Lpayal) {
  return (
    <Modal
      id={Lpayal.id}
      prodId = {Lpayal.prodId}
      name={Lpayal.name}
      modalId={Lpayal.modalId}
      oldP={Lpayal.oldP}
      currP={Lpayal.currP}
      category={Lpayal.category}
      weight={Lpayal.weight}
      img1={Lpayal.img1}
      img2={Lpayal.img2}
      img3={Lpayal.img3}
      img4={Lpayal.img4}
      carouselId ={Lpayal.carouselId}
      carousel ={Lpayal.carousel}
    />
  );
}

function LpayalApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Ladies Payal</h2>
                                    </div>
                                    <div class="container">
                                    {Lpayal.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Lpayal.map(createModal)}
    <Footer/>
    </div>
  );
}

export default LpayalApp;
