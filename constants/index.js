import { collFive, collFour, collOne, collThree, collTwo, Colopicker, graffifive, graffisix, graffithree } from "../logo/logo";
import { graffiEight,graffiSeven } from "../logo/logo";
import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
    nikeFirstVideo,
    nikeSceVideo,
    nikeThirdVideo,
    nikeFourthVideo,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPhone", "Support"];

  export const imageList = [
    {
      id: 1,
      name: " Nike Blue Running Shoes ",
      category: "Running Shoes",
      mrp: "$12000",
      image: graffisix // Add the image URL here
    },
    {
      id: 2,
      name: "Nike Airforce 1",
      category: "Sneakers",
      mrp: "$12000",
      image: collOne// Add the image URL here
    },
    {
      id: 3,
      name: "Nike Air Max",
      category: "Sports Shoes",
      mrp: "$12000",
      image: collTwo// Add the image URL here
    },
    {
      id: 4,
      name: "Nike Pegasus trail 4",
      category: "Running Shoes",
      mrp: "$12000",
      image: collThree// Add the image URL here
    },
    {
      id: 5,
      name: "Nike Red Air Jordan",
      category: "Sneakers",
      mrp: "$12000",
      image: collFour// Add the image URL here
    },
    {
      id: 6,
      name: "Nike Air Jordan Air 4",
      category: "Sneakers",
      mrp: "$12000",
      image: collFive// Add the image URL here
    },
  ];

  export const CarousalItemsList = [
    { 
      id: 1,
      product: ["Nike Hoddies"],
      intro: ["Your Exclusive Access"]
    },
    { 
      id: 2,
      product: ["White Nike Air Jorden"],
      intro: ["Nike Shoes"]
    },
    { 
      id: 3,
      product: ["Black Jacket"],
      intro: ["Nike Limited Edition"]
    },
    { 
      id: 4,
      product: ["Gym wear"],
      intro: ["Just Do It with Nike"]
    },
    { 
      id: 5,
      product: ["Red Sports Jacket"],
      intro: ["Nike Limited Edition"]
    },
    
  ]
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Just Do It",
        "Find Your Passion",
        "Groundbreaking performance.",
      ],
      video: nikeFirstVideo,
      videoDuration: 7,
    },
    {
      id: 2,
      textLists: ["Find Your Greatness", "So strong. So light. So Pro."],
      video: nikeSceVideo,
      videoDuration: 15,
    },
    {
      id: 3,
      textLists: [
        "In your Air Jordans, ",
        "you can conquer the world.",
       
      ],
      video: nikeThirdVideo,
      videoDuration: 17,
    },
    {
      id: 4,
      textLists: ["Step up your shoe game"," they said. Challenge accepted!"],
      video: nikeFourthVideo,
      videoDuration: 12,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];
  export const EditorTabs = [
    {
      name: "colorpicker",
      icon: Colopicker,
    },
  ];