import Dress from './img/Icons/Web-Icons-Dress.png';
import Top from './img/Icons/Web-Icons-Top.png';
import Skirt from './img/Icons/Web-Icons-Skirt.png';
import Jumpsuit from './img/Icons/Web-Icons-Jumpsuit.png';
import Banner1 from './img/banner/TOP-Banner.jpg';
import Banner2 from './img/banner/Skirt-Banner.jpg';
import Banner3 from './img/banner/Dress-Banner.jpg';
import White_top from './img/White-1.jpg';
import Green_top from './img/Green-1.jpg';
import Ruffle from './img/Ruffle-1.jpg';
import White_skirt from './img/White-skirt.jpg';
import Sage_skirt from './img/Sage-1.jpg';
import Leopard from './img/Leopard-1.jpg';
import Sage_dress from './img/Sage_dress.jpg';
import Giana from './img/Giana-1.jpg';
import Citrus_Maxi from './img/Citrus_Maxi.jpg';
export const sliderItems = [
    {
      id: 1,
      img: `${Banner1}`,
      title: "TOP",
      desc: "All kind of stuff availble for you",

    },
    {
      id: 2,
      img: `${Banner3}`,
      title: "Dress",
      desc: "All kind of stuff availble for you",

    },
    {
      id: 3,
      img: `${Banner2}`,
      title: "Skirt",
      desc: "All kind of stuff availble for you",

    },
  ];

 export const products = [
  
   {
    id: 1,
    Catimage: `${Top}`,
    CatName: "Top",
     cat: [
       { 
          id:1,
          name: "GREEN SHIRT",
          image:`${Green_top}`,
          Size: "MEDIUM",
          price: "$37",
       },
       { 
         id:2,
          name: "WHITE SHIRT",
          image: `${White_top}`,
          Size: "LARGE",
          price: "$37",
      },
       { 
         id:3,
          name: "RUFFLE",
          image: `${Ruffle}`,
          Size: "LARGE",
          price: "$37",
      },
    ]  
   },
   {
    id: 2,
    Catimage: `${Dress}`,
    CatName: "Dress",
     cat: [
       { 
          id:1,
          name: "Sage Dress",
          image: `${Sage_dress}`,
          Size: "SMALL",
          price: "$54",
       },
       { 
         id:2,
          name: "Giana",
          image: `${Giana}`,
          Size: "LARGE",
          price: "$37",
      },
       { 
         id:3,
          name: "Cirtus Maxi",
          image: `${Citrus_Maxi}`,
          Size: "LARGE",
          price: "$37",
      },
    ]  
   },
   {
    id: 3,
    Catimage: `${Skirt}`,
    CatName: "Skirt",
     cat: [
       { 
          id:1,
          name: "WHITE Skirt",
          image: `${White_skirt}`,
          Size: "SMALL",
          price: "$67",
       },
       { 
         id:2,
          name: "Sage Skirt",
          image: `${Sage_skirt}`,
          Size: "FREE SIZE",
          price: "$57",
      },
       { 
         id:3,
          name: "LEOPARD Skirt",
          image: `${Leopard}`,
          Size: "FREE SIZE",
          price: "$57",
      },
    ]  
   },
   {
    id: 4,
    Catimage: `${Jumpsuit}`,
    CatName: "Jumpsuit",
     cat: [
       { 
          id:1,
          name: "Women Jumpsuit",
          image: "https://global-uploads.webflow.com/610631a587ba1a6f92234aa6/61ac3775170320498abb8c00_linen-jumpsuits-for-women.jpg",
          Size: "SMALL",
          price: "$54",
       },
       { 
         id:2,
          name: "Women Jumpsuit",
          image: "https://cdn.shopify.com/s/files/1/2290/7887/products/F0001204119SUIT_4_1024x1024.jpg?v=1645093539",
          Size: "LARGE",
          price: "$37",
      },
    ]  
   },
];