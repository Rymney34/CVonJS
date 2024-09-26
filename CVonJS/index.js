// import addList from './createElem.js';

import { addExperBlock, addList, addTextExper, addUlist, addSkillsblock, createElem1 } from './createElem.js';

// import createElem1  from './createElem.js';

document.body.onload = wSiteCreator;

const bodyCont = document.createElement("div");

const leftBlock = document.createElement("div");
  // create a new div element


const nameBlock = document.createElement("div");

const animationPhoto = document.createElement("div");

const photoBlock = document.createElement("div");

const photo = document.createElement("img");

const myNameBlock = document.createElement("div");




const listBlock = document.createElement("div");

const leftlist = document.createElement("div");
const uList = document.createElement("ul")

// const liList = document.createElement("li");


const rightlist = document.createElement("div");
rightlist.classList.add("rList");

const uList2 = document.createElement("ul")
// const liList2 = document.createElement("li");



const Heading = document.createElement('h1');


const aboutMe = document.createElement("div");

const textAbout = document.createElement("div");

const headingText = document.createElement("h2");

const textMy = document.createElement("p");

const rightBlock = document.createElement("div");

const experBlock = document.createElement("div");

const experText = document.createElement("h3");

const experAllBlock = document.createElement("div")



const experTitle = document.createElement("div");

const experTime = document.createElement("div");



const experDescr = document.createElement("p");





  function wSiteCreator(){
    addStyle();
    addElement();
  }

  

  function addStyle(){

    document.body.style.margin = "0.2rem";
    



    leftBlock.style.margin = "0";
    leftBlock.style.padding = "0";
    leftBlock.style.height = "120vh";
    leftBlock.style.width = "40vw";
    leftBlock.style.border = "solid, 1px , black";
    

    rightBlock.style.height = "120vh";
    rightBlock.style.width = "60vw";
    rightBlock.style.border = "solid, 1px , black";

    bodyCont.style.display = "flex";

    nameBlock.style.border = "solid, 1px , black";
    
    nameBlock.style.width = "40vw";
    nameBlock.style.height = "40vh";
    nameBlock.style.display = "flex";

    myNameBlock.style.border = "solid, 1px , black";
    myNameBlock.style.width = "25vw";
    myNameBlock.style.height = "40vh";

    Heading.style.textAlign = "center";
    Heading.style.marginTop = "16vh";

    animationPhoto.style.border = "solid, 1px , black";
    animationPhoto.style.width = "15vw";
    animationPhoto.style.height = "40vh";
    animationPhoto.style.backgroundColor = "red"
    animationPhoto.style.display = "flex";
    animationPhoto.style.justifyContent = "center";

    photoBlock.style.border = "solid, 1px , black";
    photoBlock.style.width = "14vw";
    photoBlock.style.height = "21vh";
    photoBlock.style.borderRadius = "50%";
    photoBlock.style.marginTop = "10vh";
    photoBlock.style.overflow = "hidden";

    
    photo.style.height = "100%";
    photo.style.width = "100%";
    photo.style.objectFit = "cover";
    photo.style.objectPosition = "0 75%";

    listBlock.style.border = "solid, 1px , black";
    listBlock.style.width = "40vw";
    listBlock.style.height = "30vh";
    listBlock.style.display = "flex";
    listBlock.style.justifyContent= "space-around";
    listBlock.style.fontFamily = "Roboto";
    listBlock.style.alignItems = "center";

    // liList.style.margin = "2em";
    // liList2.style.margin = "2em";

    uList.style.listStyleType = "none";
    uList.style.padding = "0";

    uList2.style.listStyleType = "none";
    uList2.style.padding = "0";
    
   
  
    
  
// photo.style.borderRadius = "50%"

    leftlist.style.fontSize = "2.5vh";
    leftlist.style.marginTop = "0vh";
    leftlist.style.border = "solid, 1px , black";
    leftlist.style.fontWeight = "600";
    
    rightlist.style.fontSize = "2.4vh";
    rightlist.style.marginTop = "0vh";
    rightlist.style.border = "solid, 1px , black";
    rightlist.style.marginLeft = "0vh";
    rightlist.style.color = "grey"
   

    aboutMe.style.border = "solid, 1px, black";

    aboutMe.style.height = "35vh";

    textAbout.style.border = "solid, 1px, black";
    textAbout.style.marginTop = "1em";
    textAbout.style.width = "40vw";
    textAbout.style.height = "30vh";

    textMy.style.margin = "2em";

    headingText.style.margin = "1em";
    headingText.style.marginLeft = "4vw";

    experText.style.margin = "1em";
    experText.style.marginTop = "10vh";
    experText.style.fontSize = "2vw";




    experTitle.style.margin = "1em";
    experDescr.style.margin = "1em";
    experDescr.style.fontFamily = "cursive"
   
    experTime.style.margin = "1em";
    
    


  }


  

  // function addExperBlock(titleClassName, timeClassName, descrClassName){
  //   const experAllBlock = createElem1("div", "experAllBlock", "Gg" );

  //   const experTitleBlock = createElem1("div", "titleBlock",);

  //   experAllBlock.appendChild(experTitleBlock);

  //   const experTitle = createElem1("div", titleClassName);

  //   experTitleBlock.appendChild(experTitle);

  //   const experTime = createElem1("div", timeClassName);

  //   experTitleBlock.appendChild(experTime);

  //   const experDescrBlock = createElem1("div", "DescrBlock");

  //   experAllBlock.appendChild(experDescrBlock);


  //   const experDescr = createElem1("div", descrClassName);

  //   experDescrBlock.appendChild(experDescr);


  //   return experAllBlock;
    

  // }

  // const experB22 =  addExperBlock();



// function addExperBlock(titleClassName, timeClassName,descrClassName) {

   
//     experAllBlock1.appendChild(experTitleBlock);
//     experTitleBlock.appendChild(experTitle);
//     experTitle.classList.add(titleClassName);
//     experTitleBlock.appendChild(experTime);
//     experTime.classList.add(timeClassName);
//     experAllBlock.appendChild(experDescrBlock);
//     experDescrBlock.appendChild(experDescr);
//     experDescr.classList.add(descrClassName);

//     return experAllBlock;
// }

// function addTextExper(buildBlock, titleClassName, timeClassName, descrClassName, content) {
  
//   const title = buildBlock.querySelector(`.${titleClassName}`);
//   const time = buildBlock.querySelector(`.${timeClassName}`);
//   const descr = buildBlock.querySelector(`.${descrClassName}`);
  
//   title.textContent = content.title;
//   time.textContent = content.time;
//   descr.textContent = content.descr;

// }


function addElement() {

    
    addStyle(); // adding styles CSS

    Heading.textContent = "Timofei Berkut";
    myNameBlock.appendChild(Heading);


    rightBlock.id = "rightBlock";

    leftBlock.id = "leftBlock";


    document.body.appendChild(bodyCont);

    document.body.appendChild(leftBlock);

    document.body.appendChild(rightBlock);


    bodyCont.appendChild(leftBlock);
    bodyCont.appendChild(rightBlock);

    leftBlock.appendChild(nameBlock);
    leftBlock.appendChild(listBlock);

    listBlock.appendChild(leftlist);
    // leftlist.appendChild(uList);
  

    listBlock.appendChild(rightlist);
    // rightlist.appendChild(uList)
    // rightlist.appendChild(uList2);
    


    nameBlock.appendChild(animationPhoto);
    nameBlock.appendChild(myNameBlock);

    animationPhoto.appendChild(photoBlock);
    photoBlock.appendChild(photo);

    

    leftBlock.appendChild(textAbout);
    textAbout.appendChild(aboutMe);
    aboutMe.appendChild(headingText);
    aboutMe.appendChild(textMy);


    rightBlock.appendChild(experBlock);
    experBlock.appendChild(experText);

    const addSB = addSkillsblock();

    // rightBlock.appendChild(addSB);


  
    headingText.innerHTML += "About me";

    textMy.innerHTML += "I am a junior Software Engineer and Web Developer, currently studying Software Engineering at Cardiff Metropolitan University. In addition to my studies, I work as a bartender at Cardiff's Principality Stadium. Through balancing work and study, I am continuously developing a range of valuable skills, including team leadership, communication, digital skills, flexibility, adaptability, time management, and problem-solving, while also enhancing my English language skills.";


    photo.src = "./images/myPhoto.jpg";


    experText.innerHTML += "Experience"

    
    const experBlock1 = addExperBlock('title-1', 'time-1','descr-2'); 
    experBlock.appendChild(experBlock1); 

    
    addTextExper(experBlock1, 'title-1', 'time-1', 'descr-2', {
        title: "Cartdiff Metropolitan University",
        time: "Sep 2023 - Present",
        descr: "I am currently studying Software Engineering and actively developing various applications to improve my coding, problem-solving, and soft skills. So far, I have worked on projects including a chatbot in Java, a network anomaly detection app using CSV data from Wireshark, a voice assistant for calendar management built with Python and Google API, and a caravan rental website. In the website project, I developed the login and registration functionality for both front-end and back-end, and helped integrate my team's work to create a fully functional platform. These experiences have strengthened my technical and teamwork abilities."
    });

    
    const experBlock2 = addExperBlock('title-2', 'time-2', 'descr2'); 
    experBlock.appendChild(experBlock2);


    addTextExper(experBlock2, 'title-2', 'time-2', 'descr2', {
      title: "Compass Group",
      time: "Apr 2024 - Present",
      descr: "Part-time job as a bartender and retail assistant at Cardiff Principality Stadium, where I gained valuable experience in customer service while developing and enhancing key soft skills such as self-confidence, English language proficiency, respectfulness, and effective teamwork. These skills were honed in a fast-paced environment, interacting with a diverse range of customers and coordinating with team members to ensure smooth operations during large events. "
    });

    const experBlock3 = addExperBlock('title-3', 'time-3', 'descr3'); 
    experBlock.appendChild(experBlock3);

    const hyperLink = document.createElement("a");

    experBlock.appendChild(hyperLink);

    
    addTextExper(experBlock3, 'title-3', 'time-3', 'descr3', {
      


      title: "Personal projects",
      time: "Present",
      descr: "I have worked on several projects to explore different programming languages and enhance my hard skills. These include an online business card for a photographer (HTML, CSS, JavaScript), a 2D game similar to Mario (Java), a ReactJS function for selecting icons from the MUI API, and this CV created entirely in JavaScript. All projects are available on my ",
      hyperLink: "Github.",
      
    });

    const experBlock4 = addExperBlock('title-4', 'time-4', 'descr4'); 
    experBlock.appendChild(experBlock4);


    addTextExper(experBlock4, 'title-4', 'time-4', 'descr4', {
      title: "Cathays High School",
      time: "May 2022 - Jul 2023",
      descr: "Delivered professional support while demonstrating leadership qualities, managing both employees and students to ensure timely and efficient service. This experience enhanced my leadership abilities, improved my English skills, and strengthened my teamwork and workforce management skills, as well as my understanding of what it takes to be an effective leader.",
    });

    // const add = addList();

    const addUl1 = addUlist();

    leftlist.appendChild(addUl1);


    addUl1.appendChild(addList("Mail"));
    
    addUl1.appendChild(addList("Github"));
   
    addUl1.appendChild(addList("LinkedIn"));

   

    
    const addUl = addUlist();

    rightlist.appendChild(addUl);

    addUl.appendChild(addList("locktimil70@gmail.com"));
   
    addUl.appendChild(addList("https://github.com/Rymney34"));

    addUl.appendChild(addList("LinkedI2n"));

    addUl1.style.listStyleType = "none";

    addUl.style.listStyleType = "none";


  


  const newContent = document.createTextNode("Hi there and greetings!");

  

}
