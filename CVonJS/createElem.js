

export function createElem1(elem, elemClass,elemText=null) {
    const element = document.createElement(`${elem}`)
    element.classList.add(elemClass)
    elemText ? element.textContent = elemText:null
    return element
}

export function addList(content){

    var liList = document.createElement('li');
    liList.classList.add("liLists")
    liList.textContent = content;

    liList.style.marginBottom = "5vh";
    

    return liList;
}

export function addUlist(className){

    var ulList = document.createElement('ul');
  
    ulList.classList.add(className);

    
    return ulList;
}

export function addExperBlock(titleClassName, timeClassName, descrClassName){

    const experAllBlock = createElem1("div", "experAllBlock", );

    const experTitleBlock = createElem1("div", "titleBlock",);

    experAllBlock.appendChild(experTitleBlock);

    const experTitle = createElem1("div", titleClassName);

    experTitleBlock.appendChild(experTitle);

    const experTime = createElem1("div", timeClassName);

    experTitleBlock.appendChild(experTime);

    const experDescrBlock = createElem1("div", "DescrBlock");

    experAllBlock.appendChild(experDescrBlock);



    const experDescr = createElem1("p", descrClassName);


    experDescrBlock.appendChild(experDescr);

    // style

    experAllBlock.style.display = "flex";
  
    experTitle.style.margin = "1em";
    experTitle.style.width = "12vw";
    experTitle.style.textAlign = "center";

   

    experTime.style.margin = "1em";
    experTime.style.marginTop = "5vh";
    // experTime.style.width = "10vw";
    experTime.style.textAlign = "center";

    experDescr.style.margin = "1em";
    experDescr.style.width = "40vw"
    experDescr.style.fontSize = "0.99rem"
    experDescr.style.wordSpacing = "0.2rem";
    experDescr.style.textAlign = "left";
    experDescr.style.overflow = "hidden";
    experDescr.style.letterSpacing = "0.01vw"
    experDescr.style.fontFamily = "Roboto";
    experDescr.style.wordBreak = "break-all";


    experAllBlock.style.marginLeft = "1vw";
    experAllBlock.style.marginBottom = "8vh";
    experAllBlock.style.borderRadius = "1em";
    experAllBlock.style.border = "1px, solid black";
    
    // experAllBlock.style.boxShadow = "10px 10px 5px lightblue";

    experAllBlock.style.fontSize = "1.1rem";

    
    // style 
   

    return experAllBlock;
    
    

  }

  function addHover(allBlock) {
    
    // const allBlock = addExperBlock();

   

    allBlock.addEventListener(
        "mouseenter",
        (event) => {
            // event.target.style.width = "105%";
            // event.target.style.height = "105%";
            // event.target.style.backgroundColor = "red";
            event.target.style.boxShadow = "1em 1em 1em lightblue";
            event.target.style.transform = "scale(0.996)";
        }
    )
    allBlock.addEventListener(
        "mouseleave",
        (event) => {
            // event.target.style.width = "100%";
            // event.target.style.height = "100%";
            // event.target.style.backgroundColor = "white";
            event.target.style.boxShadow = "";
            event.target.style.transform = "scale(1)";
            // event.target.style.transform = "scale(1)";
        }
    )
  }
  

export function addTextExper(buildBlock, titleClassName, timeClassName, descrClassName, content) {
  
    const title = buildBlock.querySelector(`.${titleClassName}`);
    const time = buildBlock.querySelector(`.${timeClassName}`);
    const descr = buildBlock.querySelector(`.${descrClassName}`);

    const hyperLink = document.createElement("a");

    addHover(buildBlock);
  
    
    title.textContent = content.title;
    time.textContent = content.time;
    descr.textContent = content.descr;
    hyperLink.textContent = content.hyperLink;
    hyperLink.href = "https://github.com/Rymney34";

    descr.appendChild(hyperLink);

    hyperLink.style.textDecoration = "none";

    hyperLink.addEventListener(
        "mouseenter",
        (event) => {
            event.target.style.color = "green";
        
        }
    )
    hyperLink.addEventListener(
        "mouseleave",
        (event) => {
            event.target.style.color = "black";
        }
    )
   
    

    
  
}
  export function addSkillsblock(){

    // const allFooterblock = createElem1("div", "allFooterBlock")

    
        
    const skillsBlock = createElem1("div", "skillsBlock");

    const th3 = createElem1("h3", "titileSkills", "ills");

    skillsBlock.appendChild(th3);

    const addUl = addUlist();

    skillsBlock.appendChild(addUl);

    addUl.appendChild(addList("Nice"))
    
  
    // addUlist(appendChild.addList("nice"))
    


}