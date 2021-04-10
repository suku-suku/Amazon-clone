import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
         // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jfcP9OLMS6QDf5WUl5hm557o-h5GSi4-FA&usqp=CAU"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Tokyo Talkies"
           // Women Black & White Checked Fit and Flare Dress"
            price={11.96}
            rating={5}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/25/2da82277-23cf-474b-8815-f6cc8e884b971564055901027-1.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix "//Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg"
          />
        

      
          <Product
            id="4903850"
            title="Printed Straight Kurta"
            price={199.99}
            rating={3}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg"
          />
          <Product
            id="23445930"
            title="Angrakha Kurta"
            price={98.99}
            rating={5}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13647622/2021/3/4/1fa584db-2f9e-4a0f-8ee3-f649a92eb3de1614860439664-Varanga-Women-Pink--White-Leheriya-Printed-Angrakha-Kurta-Wi-1.jpg"
          />
          <Product
            id="3254354345"
            title="Floral Dress"
            price={598.99}
            rating={4}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/16/25f5b6a7-ce25-4e66-8a61-3aa2037b6c741600207614629-1.jpg"
          />
        </div>

        
        <div className="home__row">
          <Product
            id="12321341"
            title="Tokyo Talkies"
           // Women Black & White Checked Fit and Flare Dress"
            price={11.96}
            rating={5}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/15/0ed2afd4-a106-4972-9499-111c95fcc15c1602713909748-1.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix "//Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10968582/2020/2/18/19c50d33-f838-453e-8ccc-838df5ca00b41582017499216-Roadster-Women-Tshirts-9451582017497392-1.jpg"
          />
        

      
          <Product
            id="4903850"
            title="Printed Straight Kurta"
            price={199.99}
            rating={3}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/27/c3f87e02-333b-4008-aa5c-3bb5d3fc658a1611743836816-1.jpg"
          />
          <Product
            id="23445930"
            title="Angrakha Kurta"
            price={98.99}
            rating={5}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2477343/2018/2/22/11519301743689-Libas-Women-Green-Woven-Design-Pathani-Kurta-4531519301743438-1.jpg"
          />
          <Product
            id="3254354345"
            title="Floral Dress"
            price={598.99}
            rating={4}
            image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11364418/2020/1/28/8e31363f-8ac5-4669-9aa8-114d502d7be61580207577109-SASSAFRAS-Women-Maroon-Solid-Tiered-Maxi-Dress-3781580207574-1.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;