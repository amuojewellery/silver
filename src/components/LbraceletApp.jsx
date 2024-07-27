import React from "react";
import Haeder from "./Haeder";
import Footer from "./Footer";
import Product from "./Product";
import Modal from "./Modal";
import Lbracelet from "../Lbracelet";

function createProduct(Lbracelet) {
  return (
    <Product
      id={Lbracelet.id}
      prodId = {Lbracelet.prodId}
      name={Lbracelet.name}
      modalBox={Lbracelet.modalBox}
      oldP={Lbracelet.oldP}
      currP={Lbracelet.currP}
      category={Lbracelet.category}
      img1={Lbracelet.img1}
      boxName={Lbracelet.boxName}

      
    />
  );
}
function createModal(Lbracelet) {
  return (
    <Modal
      id={Lbracelet.id}
      prodId = {Lbracelet.prodId}
      name={Lbracelet.name}
      modalId={Lbracelet.modalId}
      oldP={Lbracelet.oldP}
      currP={Lbracelet.currP}
      category={Lbracelet.category}
      weight={Lbracelet.weight}
      img1={Lbracelet.img1}
      img2={Lbracelet.img2}
      img3={Lbracelet.img3}
      img4={Lbracelet.img4}
      carouselId ={Lbracelet.carouselId}
      carousel ={Lbracelet.carousel}
      size = {Lbracelet.size}

    />
  );
}

function LbraceletApp() {
  return (
    <div class="home_black_version">
    <Haeder/>
    <section class="product_section p_section1 product_black_section bottom">
                                    <div class="title">
                                        <h2 >Ladies Bracelet</h2>
                                    </div>
                                    <div class="container">
                                    {Lbracelet.map(createProduct)}
                                    
                                    </div>
    </section> 
    {Lbracelet.map(createModal)}
    <Footer/>
    </div>
  );
}

export default LbraceletApp;
