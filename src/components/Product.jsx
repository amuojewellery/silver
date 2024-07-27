import React from "react";

function Product(props){
    return(
        
       <div class="single_product">
       
                                            <div class="product_thumb">
                                                <p class="id1">Product Id- {props.prodId}</p>

                                                <a  class="primary_img"><img src={props.img1}
                                                        alt="product1"/></a>
                                                <a  class="secondary_img"><img src="./images/logo/logo1.jpg"
                                                        alt="product1"/></a>
                                                <div class="quick_button">
                                                    <a href="" data-toggle="modal" data-target={props.modalBox}
                                                        data-placement="top" data-original-title="">{props.boxName}</a>
                                                </div>
                                            </div>
                                            <div class="product_content">
                                                <div class="tag_cate">
                                                    <a >{props.category}</a>
                                                </div>
                                                <h3><a>{props.name} </a></h3>
                                                <div class="price_box">
                                                    <span class="old_price">Rs. {props.oldP}</span>
                                                    <span class="current_price">Rs. {props.currP}</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        
                                   
    );
}

export default Product;