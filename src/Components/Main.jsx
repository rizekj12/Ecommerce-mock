import React, { Component } from 'react';
import Head from "./Head"
import Product from "./Product"
import products from "../Products.json"

class Main extends Component {
    state = { items:  [
        {
            "itemID": 1,
            "type" : "crew neck t-shirt",
            "color" : "blue",
            "img" : "https://beta.gamenight.plus/shop/imgs/gamenight/shirtback.jpg",
            "rating" : 4
        },
        {
            "itemID": 2,
            "type" : "crew neck t-shirt",
            "color" : "red",
            "img" : "https://beta.gamenight.plus/shop/imgs/mafia/shirtback.jpg",
            "rating" : 4
        },
        {
            "itemID": 3,
            "type" : "v neck t-shirt",
            "color" : "green",
            "img" : "https://explosiontshirt.com/wp-content/uploads/2018/10/men-irish-green-tshirt-gildan-adult-front1.jpg",
            "rating" : 4
        },
        {
            "itemID": 4,
            "type" : "v neck t-shirt",
            "color" : "purple",
            "img" : "https://www.bigcitysportswear.com/media/catalog/product/cache/73/image/900x800/9df78eab33525d08d6e5fb8d27136e95/4/6/46000-sport-purple-front.jpg",
            "rating" : 4
        }
    ], 
    shopCount: 0,
    cart:[]}

    addToCart(){

    }
    

    render() { 
        return (
            <>
            <Head shopCount={this.state.shopCount}/>
            <div className="shop-div">
            {
             this.state.items && this.state.items.map((item) => 
                    <Product id={item.itemID} type={item.type} image={item.img}/>  
                )
            } 
            </div>
            
            
            </>
          );
    }
}
 
export default Main;