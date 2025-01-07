// import addList from './createElem.js';

import { addDl, addExperBlock, addList, addProgressBar, addSkillsblock, addTextExper, addUlist, createBubbleAnimation, createElem1 } from './createElem.js';



document.body.onload = wSiteCreator;

const bodyCont = document.createElement("div");

bodyCont.className = "bodyMain"

const leftBlock = document.createElement("div");



const nameBlock = document.createElement("div");

const animationPhoto = document.createElement("div");

const photoBlock = document.createElement("div");

const photo = document.createElement("img");

const myNameBlock = document.createElement("div");




const listBlock = document.createElement("div");

const leftlist = document.createElement("div");
const uList = document.createElement("ul")



const rightlist = document.createElement("div");
rightlist.classList.add("rList");

const uList2 = document.createElement("ul")



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

    document.body.style.margin = "0rem";


    leftBlock.style.margin = "0";
    leftBlock.style.padding = "0";
    leftBlock.style.backgroundColor = "#3d3e42";
    
    leftBlock.style.width = "";
    leftBlock.style.border = "solid, 1px , black";


    rightBlock.style.width = "";
    rightBlock.style.border = "solid, 1px , black";

    bodyCont.style.display = 'flex';
    
    // if(bodyCont <768){
    //   bodyCont.style.flexDirection = "column";
    // }

   
    
    nameBlock.style.width = "100%";
    nameBlock.style.height = "325px";
    nameBlock.style.display = "flex";
    nameBlock.style.marginTop = "40px";
    nameBlock.style.fontFamily = "Roboto";
    
    myNameBlock.style.width = "100%";
    myNameBlock.style.height = "100%";

    Heading.style.textAlign = "center";
    Heading.style.marginTop = "130px";
    Heading.style.color = "#fff";

    
    animationPhoto.style.width = "40%";
    animationPhoto.style.height = "100%";
    animationPhoto.style.display = "flex";
    animationPhoto.style.justifyContent = "center";
    animationPhoto.style.position = "relative";

    photoBlock.style.border = "solid, 1px , black";
    photoBlock.style.position= "absolute";
    photoBlock.style.zIndex = "1";
    photoBlock.style.width = "9em";
    photoBlock.style.height = "9em";
    
    
    photoBlock.style.borderRadius = "50%";
    photoBlock.style.marginTop = "75px";
    photoBlock.style.overflow = "hidden";

    
    photo.style.height = "101%";
    photo.style.width = "107%";
    photo.style.objectFit = "cover";
    photo.style.objectPosition = "0 72%";

  
   
    listBlock.style.height = "15%";
    listBlock.style.display = "flex";
    listBlock.style.justifyContent= "space-around";
    listBlock.style.fontFamily = "Roboto";
    listBlock.style.alignItems = "center";
    listBlock.style.margin = "50px 0px  0px  3em";
    


    leftlist.style.fontSize = "135%";
    leftlist.style.marginTop = "0vh";    
    leftlist.style.fontWeight = "600";
    leftlist.style.color = "#fff";
    
    rightlist.style.fontSize = "135%";
    rightlist.style.width = "100%";
    rightlist.style.marginTop = "0vh";
    rightlist.style.marginLeft = "30px";
    rightlist.style.color = "#9099a0";
    

    aboutMe.style.marginTop = "55px"
    aboutMe.style.marginLeft = "auto"
    

    textAbout.style.marginTop = "10px";
    textAbout.style.width = "100%";
    textAbout.style.fontFamily = "Roboto";


    textMy.style.margin = "20px 40px";
    
    textMy.style.color = "#9099a0"

    headingText.style.margin = "40px"
    headingText.style.fontSize = "35px"
    headingText.style.color = "#66cc99";

    experText.style.margin = "20px";
    experText.style.marginTop = "65px";
    experText.style.fontSize = "23px";

    
    experTitle.style.margin = "12px";
    experDescr.style.margin = "12px";
    experDescr.style.fontFamily = "cursive"
   
    experTime.style.margin = "12px";
}



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
    listBlock.appendChild(rightlist);

    


    nameBlock.appendChild(animationPhoto);
    nameBlock.appendChild(myNameBlock);

    
    animationPhoto.appendChild(photoBlock);
  
    createBubbleAnimation(animationPhoto);
    
    photoBlock.appendChild(photo);

    

    leftBlock.appendChild(textAbout);
    textAbout.appendChild(aboutMe);
    aboutMe.appendChild(headingText);
    aboutMe.appendChild(textMy);


    rightBlock.appendChild(experBlock);
    experBlock.appendChild(experText);

    
  
    headingText.innerHTML += "About me";

    textMy.innerHTML += "I am a junior Software Engineer and Web Developer, currently studying Software Engineering at Cardiff Metropolitan University. In addition to my studies, I work as a bartender at Cardiff's Principality Stadium. Through balancing work and study, I am continuously developing a range of valuable skills, including team leadership, communication, digital skills, flexibility, adaptability, time management, and problem-solving, while also enhancing my English language skills.";


    photo.src = "./images/myPhoto.jpg";



    const hoobies = createElem1("div", "hobbies");
    leftBlock.appendChild(hoobies);

    const th4 = createElem1("h2", "titleHobbies", "Hobbies");
    hoobies.appendChild(th4);


 
    const addText = createElem1("div", "hText","I have a strong passion for creative pursuits such as video production, simple design work, and photography, with a particular focus on portraiture. I enjoy enhancing the quality of my images using Photoshop, always aiming to bring out the best in each shot.");
    const addText1 = createElem1("div", "hText", "In addition to my creative interests, I have a keen enthusiasm for technology. I regularly build custom computers and repair iPhones, which allows me to stay hands-on with the latest hardware developments.")
    const addText2 = createElem1("div", "hText", "Fitness plays an important role in my routine. I find that regular gym workouts not only help me stay in shape but also clear my mind and improve my problem-solving abilities when it comes to coding.");
    const addText3 = createElem1("div", "hText", "Whenever I can, I love to explore the great outdoors, particularly hiking in places like Snowdonia and the Lake District. These adventures provide a perfect balance to my tech-focused lifestyle, offering inspiration and a fresh perspective.");
    hoobies.appendChild(addText);
    hoobies.appendChild(addText1);
    hoobies.appendChild(addText2);
    hoobies.appendChild(addText3);
    
    // hoobies.style.fontSize = "16px"
    hoobies.style.marginTop = "120px"


    th4.style.margin = "40px";
    th4.style.color =  "#66cc99";
    th4.style.fontSize = "35px"


   
    addText.style.margin = "20px 40px";
    addText.style.color = "#9099a0"
    addText.style.fontFamily = "Roboto";
  
    addText1.style.margin = "20px 40px";
    addText1.style.color = "#9099a0"
    addText1.style.fontFamily = "Roboto";
    
    addText2.style.margin = "20px 40px";
    addText2.style.color = "#9099a0"
    addText2.style.fontFamily = "Roboto";
  
    addText3.style.margin = "20px 40px";
    addText3.style.color = "#9099a0"
    addText3.style.fontFamily = "Roboto"
    addText3.style.marginBottom = "70px";
  

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




    const addUl1 = addUlist();

    leftlist.appendChild(addUl1);


    addUl1.appendChild(addList("Mail"));
    
    addUl1.appendChild(addList("Github"));
   
    addUl1.appendChild(addList("LinkedIn"));

   

    
    const addUl = addUlist();

    rightlist.appendChild(addUl);

    addUl.appendChild(addList("ofeitim76@gmail.com"));
   
    const ash = createElem1("a","aLink","https://github.com/Rymney34")
    

    addUl.appendChild(addList(ash));

    addUl.appendChild(addList("LinkedI2n"));

    ash.href = "https://github.com/Rymney34";

    addUl1.style.listStyleType = "none";

    addUl.style.listStyleType = "none";

    addUl1.style.padding = "0";

    addUl.style.padding = "0";



    const rfBlock = createElem1("div", "rfblock");
    rightBlock.appendChild(rfBlock);


    const languagesBlock = createElem1("div", "listlBlock");
    rfBlock.appendChild(languagesBlock);

    const titleBlock = createElem1("h3", "titlehH3", "Languges I speak");

    languagesBlock.appendChild(titleBlock);

    const languagesList = createElem1("div", "laguagesblock");
    languagesBlock.appendChild(languagesList);


    const dlist = createElem1("dl" , "dList");
    languagesBlock.appendChild(dlist);


      dlist.appendChild(addProgressBar("progress","barr", "75", "100"));
      dlist.appendChild(addDl("English", "Fluent"));

      dlist.appendChild(addProgressBar("progress","barr", "100", "100"));
      dlist.appendChild(addDl("Russian", "Native"));

      dlist.appendChild(addProgressBar("progress","barr", "50", "100"));
      dlist.appendChild(addDl("Polish", "Pre-Intermidiate"));

      dlist.appendChild(addProgressBar("progress","barr", "5", "100"));
      dlist.appendChild(addDl("Dutch", "Pre-Entry"));

     
      dlist.style.fontSize = "16.5px";
        

      titleBlock.style.marginBottom = "20px"
 
      rfBlock.style.display = "flex";

      rfBlock.style.justifyContent = "space-around";

    const addSB = addSkillsblock();

    rfBlock.appendChild(addSB);

    updateLayout();
    
    function updateLayout() {
       
      const mediaQuery = window.matchMedia('(min-width: 768px)')
      const mediaQuery1 = window.matchMedia('(min-width: 1024px)')


      if (mediaQuery1.matches) {
        // Then trigger an alert
        bodyCont.style.display = 'flex'
        bodyCont.style.flexDirection='row'; 
        leftlist.style.fontSize = "135%";
        rightlist.style.fontSize = "135%";
        Heading.style.fontSize = "30px";
        listBlock.style.marginLeft = '40px'
     
        dlist.style.fontSize = "18.5px";
        titleBlock.style.fontSize = "19px"
        addSB.style.fontSize = "20px"
        addSB.style.width = "200px"
        animationPhoto.style.height = "300px"
        photoBlock.style.width = "165px"
        photoBlock.style.height = "155px"
        photoBlock.style.marginTop= "54px"
      }

      else if (mediaQuery.matches) {
        // Then trigger an alert
        bodyCont.style.display = 'flex'
        bodyCont.style.flexDirection='column'; 
        listBlock.style.marginLeft = '200px'
        leftlist.style.fontSize = "35px";
        rightlist.style.fontSize = "35px";
        Heading.style.fontSize = "60px";
        dlist.style.fontSize = "26.5px";
        titleBlock.style.fontSize = "27.5px"
        addSB.style.fontSize = "30px"
        addSB.style.width = "340px"
        animationPhoto.style.height = "300px"
        photoBlock.style.width = "200px"
        photoBlock.style.height = "200px"
        photoBlock.style.marginTop= "30px"
       
      }
      else {
        bodyCont.style.display = 'flex';
        bodyCont.style.flexDirection = 'column'; // Column for small screens (default)
      }

      window.addEventListener('resize', updateLayout);

      
  }
  
  // Initialize the layout when the page is loaded
 
  // Initial layout update
  
   
}


