import addList from './createElem.js';

import adduList from './createElem.js';

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

const experTitleBlock = document.createElement("div");

const experTitle = document.createElement("div");

const experTime = document.createElement("div");

const experDescrBlock = document.createElement("div");

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
    listBlock.style.fontFamily = "san-serif";

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

    experAllBlock.style.display = "flex";
    // experBlock.style.flexDirection = "column";


    experTitle.style.margin = "1em";
    experDescr.style.margin = "1em";
   
    experTime.style.margin = "1em";
    
    


  }

// function addList(content){

//     var liList = document.createElement('li');
//     liList.textContent = content;

//     return liList;
// }

function addUlist(className){

  
  var ulList = document.createElement('ul');

  ulList.classList.add(className);

  return ulList;
}



function addExperBlock(titleClassName, timeClassName,descrClassName) {

   
    experAllBlock.appendChild(experTitleBlock);
    experTitleBlock.appendChild(experTitle);
    experTitle.classList.add(titleClassName);
    experTitleBlock.appendChild(experTime);
    experTime.classList.add(timeClassName);
    experAllBlock.appendChild(experDescrBlock);
    experDescrBlock.appendChild(experDescr);
    experDescr.classList.add(descrClassName);

    return experAllBlock;
}
function addTextExper(buildBlock, titleClassName, timeClassName, descrClassName, content) {
  
  const title = buildBlock.querySelector(`.${titleClassName}`);
  const time = buildBlock.querySelector(`.${timeClassName}`);
  const descr = buildBlock.querySelector(`.${descrClassName}`);
  
  title.textContent = content.title;
  time.textContent = content.time;
  descr.textContent = content.descr;

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
    leftlist.appendChild(uList);
  

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
    // experBlock.appendChild(experAllBlock);
    // experBlock.appendChild(experAllBlock);
    // experAllBlock.appendChild(experTitleBlock);
    // experTitleBlock.appendChild(experTitle);
    // experTitleBlock.appendChild(experTime);
    // experAllBlock.appendChild(experDescrBlock);
    // experDescrBlock.appendChild(experDescr);




    headingText.innerHTML += "About me";

    textMy.innerHTML += "I am a junior Software Engineer and Web Developer, currently studying Software Engineering at Cardiff Metropolitan University. In addition to my studies, I work as a bartender at Cardiff's Principality Stadium. Through balancing work and study, I am continuously developing a range of valuable skills, including team leadership, communication, digital skills, flexibility, adaptability, time management, and problem-solving, while also enhancing my English language skills.";

   

    photo.src = "./images/myPhoto.jpg";


    experText.innerHTML += "Experience"

    
    var experBlock1 = addExperBlock('title-1', 'time-1','descr-2'); 
    experBlock.appendChild(experBlock1); 

    
  
    addTextExper(experBlock1, 'title-1', 'time-1', 'descr-2', {
        title: "Programer",
        time: "july - today",
        descr: "something"
    });

    



    var experBlock2 = addExperBlock('title-2', 'time-2', 'descr2'); 
    experBlock.appendChild(experBlock2); 
    experBlock.appendChild(experBlock2.cloneNode(true));

    addTextExper(experBlock2, 'title-2', 'time-2', 'descr2', {
      title: "Programmer",
      time: "july - tomorow",
      descr: "gg"
  });

   

    
    
    





  // const obj = {
  //   'obj1': 1,
  //   'obj2': 2,
  // }

    uList.appendChild(addList("Mail"));
    // uList.appendChild(liList.cloneNode(true));
    uList.appendChild(addList("Github"));
    // uList.appendChild(liList.cloneNode(true));
    uList.appendChild(addList("LinkedIn"));


    
    const addUl = addUlist("ulList2");

    rightlist.appendChild(addUl);

    addUl.appendChild(addList("locktimil70@gmail.com"));
   
    addUl.appendChild(addList("https://github.com/Rymney34"));

    addUl.appendChild(addList("LinkedI2n"));

    
    // const footer = createElem('div', 'footer-elem', 'Gazoz')

    // experBlock.appendChild(footer)


  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div

  

}
