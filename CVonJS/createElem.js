

export function createElem1(elem, elemClass,elemText=null) {
    const element = document.createElement(`${elem}`)
    element.classList.add(elemClass)
    elemText ? element.textContent = elemText:null
    return element
}

export function addList(content, classNamee){

    var liList = document.createElement('li');
    liList.classList.add(classNamee)
    liList.textContent = content;

    liList.style.marginBottom = "5vh";
    

    return liList;
}


export function addDl(contnet1, content2){



    const  dtList = createElem1('dt', "dtl", contnet1);

    const  ddList = createElem1('dd', 'ddl', content2);

    const fragment = document.createDocumentFragment();
    fragment.appendChild(dtList);
    fragment.appendChild(ddList);

    ddList.style.margin = "0";


    return fragment;
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
    experAllBlock.style.width = "56.5vw";
    experAllBlock.style.marginBottom = "8vh";
    experAllBlock.style.borderRadius = "1em";
    experAllBlock.style.border = "1px, solid black";
    
    // experAllBlock.style.boxShadow = "10px 10px 5px lightblue";

    experAllBlock.style.fontSize = "1.1rem";

    
    // style 
   

    return experAllBlock;
    
    

  }

  function addHover(allBlock) {
    


    allBlock.addEventListener(
        "mouseenter",
        (event) => {
            event.target.style.boxShadow = "1em 1em 1em lightblue";
            event.target.style.transform = "scale(0.996)";
        }
    )
    allBlock.addEventListener(
        "mouseleave",
        (event) => {
            event.target.style.boxShadow = "";
            event.target.style.transform = "scale(1)";
           
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


    const skillsBlock = createElem1("div", "skillsBlock");

    const rBlock = createElem1("div", "rBlock")

    const th3 = createElem1("h3", "titileSkills", "Skills");

    rBlock.appendChild(th3);

    const addUl = addUlist('skillsList');


    const htmlCssSkill = addList("HTML/CSS", "skillsList");
    addSkillBarToListItem(htmlCssSkill, "110%", "skill_1");
    addUl.appendChild(htmlCssSkill);

    const jsSkill = addList("JavaScript", "skillsList");
    addSkillBarToListItem(jsSkill, "90%", "skill_2");
    addUl.appendChild(jsSkill);

    const javaSkill = addList("Java", "skillsList");
    addSkillBarToListItem(javaSkill, "50%", "skill_3");
    addUl.appendChild(javaSkill);

    const phpSkills = addList("PHP", "skillsList");
    addSkillBarToListItem(phpSkills, "50%", "skill_4");
    addUl.appendChild(phpSkills);

    const phythonSkill = addList("Python", "skillsList");
    addSkillBarToListItem(phythonSkill, "50%", "skill_5");
    addUl.appendChild(phythonSkill);

    const photSkill = addList("Photoshop", "skillsList");
    addSkillBarToListItem(photSkill, "50%", "skill_6");
    addUl.appendChild(photSkill);

    const videSkill = addList("Video Editing", "skillsList");
    addSkillBarToListItem(videSkill, "50%", "skill_7");
    addUl.appendChild(videSkill);

    const leaderSkill= addList("Leadership", "skillsList");
    addSkillBarToListItem(leaderSkill, "35%", "skill_8");
    addUl.appendChild(leaderSkill);

    addUl.style.listStyleType = "none";
    addUl.style.width = "20vw";
    addUl.style.padding= "0";


    rightBlock.appendChild(skillsBlock);
    skillsBlock.appendChild(rBlock);
    rBlock.appendChild(addUl);

    

    const hoobies = createElem1("div", "hobbies");
    skillsBlock.appendChild(hoobies);
    const th4 = createElem1("h3", "titleHobbies", "Hobbies");
    hoobies.appendChild(th4);
    const addText = createElem1("div", "hText", "I like to create videos and take photos of people, also I like to build computers for different ");
    hoobies.appendChild(addText);

    addText.style.width = "20vw";

    skillsBlock.style.display = "flex";
    hoobies.style.marginLeft = "10vw"
    hoobies.style.width = "20vw"
    



    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes skill_1 { from { width: 0%; } to { width: 90%; } }
        @keyframes skill_2 { from { width: 0%; } to { width: 30%; } }
        @keyframes skill_3 { from { width: 0%; } to { width: 20%; } }
        @keyframes skill_4 { from { width: 0%; } to { width: 10%; } }
        @keyframes skill_5 { from { width: 0%; } to { width: 10%; } }
        @keyframes skill_8 { from { width: 0%; } to { width: 35%; } }
        @keyframes skill_6 { from { width: 0%; } to { width: 50%; } }
        @keyframes skill_7 { from { width: 0%; } to { width: 60%; } }

        .skillsBlock { width: 28vw; margin: 1em; margin-left: 1.4em;}

        .rBlock{ display: flex; flex-direction: column; margin-left: 1vw;}


        .titleSkills {text-transform:uppercase;}
        `;
    document.head.appendChild(styleSheet);

}


// Function to create and append the skill bar after the list item is added
function addSkillBarToListItem(liItem, widthPercentage, animationName, duration = '2s') {
    const skillBar = document.createElement('div');
    skillBar.style.position = 'relative';
    skillBar.style.marginTop = '5px'; 

    skillBar.style.content = '';
    skillBar.style.width = '100%';
    skillBar.style.height = '6px';
    skillBar.style.backgroundColor = 'rgb(74 78 81 / 20%)';
    skillBar.style.marginTop = '3px';
    skillBar.style.display = 'block';

  
    const progressBar = document.createElement('div');
    progressBar.style.width = '0'; 
    progressBar.style.height = '6px';
    progressBar.style.backgroundColor = '#66cc99'; 
    progressBar.style.position = 'absolute';
    progressBar.style.marginTop = '3px';
    progressBar.style.bottom = '0';
    
    

    progressBar.style.animation = `${animationName} ${duration} ease forwards`;

    skillBar.appendChild(progressBar);
    liItem.appendChild(skillBar); 
}


