import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Lanklet from "../Lanklet";

function createProduct(Lanklet) {
  return (
    <Product
      id={Lanklet.id}
      prodId = {Lanklet.prodId}
      name={Lanklet.name}
      modalBox={Lanklet.modalBox}
      oldP={Lanklet.oldP}
      currP={Lanklet.currP}
      category={Lanklet.category}
      img1={Lanklet.img1}
      boxName={Lanklet.boxName}

    />
  );
}
function createModal(Lanklet) {
  return (
    <Modal
      id={Lanklet.id}
      prodId = {Lanklet.prodId}
      name={Lanklet.name}
      modalId={Lanklet.modalId}
      oldP={Lanklet.oldP}
      currP={Lanklet.currP}
      category={Lanklet.category}
      weight={Lanklet.weight}
      img1={Lanklet.img1}
      img2={Lanklet.img2}
      img3={Lanklet.img3}
      img4={Lanklet.img4}
      carouselId ={Lanklet.carouselId}
      carousel ={Lanklet.carousel}
      size = {Lanklet.size}

    />
  );
}

function LankletApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Ladies Anklet</h2>
                                    </div>
                                    <div class="container">
                                    {Lanklet.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Lanklet.map(createModal)}
    <Footer/>
    </div>
  );
}

export default LankletApp;
