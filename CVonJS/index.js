document.body.onload = wSiteCreator;

const bodyCont = document.createElement("div");

const leftBlock = document.createElement("div");
  // create a new div element
const rightBlock = document.createElement("div");

const nameBlock = document.createElement("div");

const animationPhoto = document.createElement("div");

const photoBlock = document.createElement("div");

const myNameBlock = document.createElement("div");

const photo = document.createElement("img");


const listBlock = document.createElement("div");

const leftlist = document.createElement("div");
const uList = document.createElement("ul")
const liList = document.createElement("li");


const rightlist = document.createElement("div");
const uList2 = document.createElement("ul")
const liList2 = document.createElement("li");



const Heading = document.createElement('h1');


const aboutMe = document.createElement("div");

const textAbout = document.createElement("div");









  function wSiteCreator(){
    addStyle();
    addElement();
  }




  function addStyle(){
    
    leftBlock.style.margin = "0";
    leftBlock.style.padding = "0";
    leftBlock.style.height = "100vh";
    leftBlock.style.width = "40vw";
    leftBlock.style.border = "solid, 1px , black";
    

    rightBlock.style.height = "100vh";
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

    listBlock.style.border = "solid, 1px , black";
    listBlock.style.width = "40vw";
    listBlock.style.height = "40vh";
    listBlock.style.display = "flex";
    listBlock.style.justifyContent= "space-around";
    listBlock.style.fontFamily = "san-serif";

    liList.style.margin = "2em";
    liList2.style.margin = "2em";

    uList.style.listStyleType = "none";
    uList.style.padding = "0";

    uList2.style.listStyleType = "none";
    uList2.style.padding = "0";
    
    photoBlock.style.border = "solid, 1px , black";
    photoBlock.style.width = "14vw";
    photoBlock.style.height = "21vh";
    photoBlock.style.borderRadius = "50%";
    photoBlock.style.marginTop = "10vh";


    leftlist.style.fontSize = "2.5vh";
    leftlist.style.marginTop = "6vh";
    leftlist.style.border = "solid, 1px , black";
    leftlist.style.fontWeight = "600";
    
    rightlist.style.fontSize = "2.4vh";
    rightlist.style.marginTop = "6vh";
    rightlist.style.border = "solid, 1px , black";
    rightlist.style.marginLeft = "0vh";
    rightlist.style.color = "grey"
   


    
    


  }

function addList(content){

    liList.textContent = content;

    return liList;    
}

function addList2(content){

    liList2.textContent = content;

    return liList2;    
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
    rightlist.appendChild(uList2);
    


    nameBlock.appendChild(animationPhoto);
    nameBlock.appendChild(myNameBlock);

    animationPhoto.appendChild(photoBlock);
    photoBlock.appendChild(photo);

    uList.appendChild(addList("Mail"));
    uList.appendChild(liList.cloneNode(true));
    uList.appendChild(addList("Github"));
    uList.appendChild(liList.cloneNode(true));
    uList.appendChild(addList("LinkedIn"));


    uList2.appendChild(addList2("locktimil70@gmail.com"));
    uList2.appendChild(liList2.cloneNode(true));
    uList2.appendChild(addList2("https://github.com/Rymney34"));
    uList2.appendChild(liList2.cloneNode(true));
    uList2.appendChild(addList2("LinkedI2n"));



    


  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div

  

}
