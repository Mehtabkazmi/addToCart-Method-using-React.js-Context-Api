import Dress from './img/Icons/Web-Icons-Dress.png';
import Top from './img/Icons/Web-Icons-Top.png';
import Skirt from './img/Icons/Web-Icons-Skirt.png';
import Jumpsuit from './img/Icons/Web-Icons-Jumpsuit.png';

export const sliderItems = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0207/3647/5236/products/image_777d29eb-deb3-45ff-856b-81796872a2db@2x.jpg",
      title: "TOP",
      desc: "All kind of stuff availble for you",

    },
    {
      id: 2,
      img: "https://assets.vogue.com/photos/60e4c06460eb32a68f16c1cb/master/w_1280%2Cc_limit/slide_19.jpg",
      title: "Dress",
      desc: "All kind of stuff availble for you",

    },
    {
      id: 3,
      img: "https://media.istockphoto.com/photos/colorful-skirts-isolated-picture-id1171657575?k=20&m=1171657575&s=612x612&w=0&h=ggT2HUGbkUd7N1oESfv3izK_gCdG-0Gv6zYyltpEnGE=",
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
          image:"https://cdn.shopify.com/s/files/1/0207/3647/5236/products/image_777d29eb-deb3-45ff-856b-81796872a2db@2x.jpg",
          Size: "MEDIUM",
          price: "$37",
       },
       { 
         id:2,
          name: "WHITE SHIRT",
          image: "https://assets.vogue.com/photos/61dcb5647b3ab37c2143e87d/1:1/w_1333,h_1333,c_limit/slide_3.jpg",
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
          name: "Summer Dress",
          image: "https://assets.vogue.com/photos/60e4c06460eb32a68f16c1cb/master/w_1280%2Cc_limit/slide_19.jpg",
          Size: "SMALL",
          price: "$54",
       },
       { 
         id:2,
          name: "White Shirt",
          image: "https://static01.nyt.com/images/2020/08/18/fashion/18STRAWBERRYDRESS-4/18STRAWBERRYDRESS-4-mobileMasterAt3x.jpg",
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
          name: "WHITE MAXI",
          image: "https://media.istockphoto.com/photos/colorful-skirts-isolated-picture-id1171657575?k=20&m=1171657575&s=612x612&w=0&h=ggT2HUGbkUd7N1oESfv3izK_gCdG-0Gv6zYyltpEnGE=",
          Size: "SMALL",
          price: "$67",
       },
       { 
         id:2,
          name: "Pleated Skirt",
          image: "https://www.liveabout.com/thmb/ChwDWEIpamfogWhOd2YyYdt0AB8=/3275x3275/smart/filters:no_upscale()/COVER-GettyImages-602352236-ChristianVierig-5b23ad79fa6bcc0036c32acb.jpg",
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