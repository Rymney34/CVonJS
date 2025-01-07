

export function createElem1(elem, elemClass,elemText=null) {
  const element = document.createElement(`${elem}`)
  element.classList.add(elemClass)
  elemText ? element.textContent = elemText:null
  return element
}

export function addList(content, classNamee) {
var liList = document.createElement('li');


if (classNamee) {
    liList.classList.add(classNamee);
}

if (content.tagName === 'A') {
    content.style.color = "#66cc99"; 
    content.style.textDecoration = "none"; 

    liList.appendChild(content);
} 

else if (typeof content === 'string') {
    liList.textContent = content;
}

liList.style.marginBottom = "40px";

return liList;
}

export function addDl(contnet1, content2){

  const  dtList = createElem1('dt', "dtl", contnet1);


  const  ddList = createElem1('dd', 'ddl', content2);

  const fragment = document.createDocumentFragment();
  fragment.appendChild(dtList);
  fragment.appendChild(ddList);

  ddList.style.margin = "0";
  ddList.style.marginTop = "5px"
  dtList.style.marginTop = "5px";
  dtList.style.fontWeight = "bold";
  ddList.style.fontFamily = "Roboto";
  dtList.style.fontFamily = "Roboto";

  return fragment;
}

export function addProgressBar(elem, elemClass, urVal, maxVal) {
  const element = document.createElement(elem);
  element.classList.add(elemClass);
  element.value = urVal;
  element.max = maxVal;


  element.style.marginTop = "30px";

  return element;
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

  experTitle.style.margin = "40px";
  // experTitle.style.marginRight = "80px";

  
  experTitle.style.textAlign = "center";
  experTitle.style.fontSize = "25px"
 

  experTime.style.margin = "19px";
  experTime.style.marginTop = "60px"
  
  experTime.style.textAlign = "center";
  experTime.style.fontSize = "24px"

  experDescr.style.margin = "20px";
  experDescr.style.fontSize = "20px"
  experDescr.style.marginLeft = "60px"
  // experDescr.style.wordSpacing = "2.4px";
  // experDescr.style.textAlign = "left";
  // experDescr.style.overflow = "hidden";
  // experDescr.style.letterSpacing = "0.5px"
  // experDescr.style.fontFamily = "Roboto";
  // experDescr.style.wordBreak = "break-all";


  
  experAllBlock.style.margin = "16px";
  experAllBlock.style.marginBottom = "60px";
  experAllBlock.style.borderRadius = "10px";
  experAllBlock.style.border = "1px, solid black";

  

  
  // style 


  return experAllBlock;
  

}

function addHover(allBlock) {
  


  allBlock.addEventListener(
      "mouseenter",
      (event) => {
          event.target.style.boxShadow = "14px 14px 14px #ade6ae";
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
  addSkillBarToListItem(javaSkill, "60%", "skill_3");
  addUl.appendChild(javaSkill);

  const phpSkills = addList("PHP", "skillsList");
  addSkillBarToListItem(phpSkills, "50%", "skill_4");
  addUl.appendChild(phpSkills);

  const phythonSkill = addList("Python", "skillsList");
  addSkillBarToListItem(phythonSkill, "50%", "skill_5");
  addUl.appendChild(phythonSkill);

  const photSkill = addList("Photoshop / Video Editing", "skillsList");
  addSkillBarToListItem(photSkill, "50%", "skill_6");
  addUl.appendChild(photSkill);

  const AndroidStu = addList("Android Studio", "skillsList");
  addSkillBarToListItem(AndroidStu, "50%", "skill_7");
  addUl.appendChild(AndroidStu);

  const React = addList("React", "skillsList");
  addSkillBarToListItem(React, "10%", "skill_8");
  addUl.appendChild(React);



  addUl.style.listStyleType = "none";
  
  addUl.style.padding= "0";


  rBlock.appendChild(addUl);



  

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  
  styleSheet.innerText = `
      @keyframes skill_1 { from { width: 0%; } to { width: 90%; } }
      @keyframes skill_2 { from { width: 0%; } to { width: 30%; } }
      @keyframes skill_3 { from { width: 0%; } to { width: 30%; } }
      @keyframes skill_4 { from { width: 0%; } to { width: 10%; } }
      @keyframes skill_5 { from { width: 0%; } to { width: 10%; } }
      @keyframes skill_6 { from { width: 0%; } to { width: 50%; } }
      @keyframes skill_7 { from { width: 0%; } to { width: 50%; } }
      @keyframes skill_8 { from { width: 0%; } to { width: 5%; } }
      .rBlock{ display: flex; flex-direction: column; margin-left: 14px;}

      .titleSkills {text-transform:uppercase;}


    
      `;
      document.head.appendChild(styleSheet);

  return rBlock;

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

export function createBubbleAnimation(targetElement) {

  function loadGSAP(callback) {
  
    if (typeof gsap !== "undefined") {
      callback(); 
      return;
    }

    // Create a script tag
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";


    script.onload = () => callback();

    document.head.appendChild(script);
  }

  function runAnimation() {
    const svgNS = "http://www.w3.org/2000/svg"; 
    // Create SVG element
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("viewBox", "25 45 300 300");
    targetElement.appendChild(svg);
    
    

   
    const defs = document.createElementNS(svgNS, "defs");
    const filter = document.createElementNS(svgNS, "filter");
    filter.setAttribute("id", "goo");

    const feGaussianBlur = document.createElementNS(svgNS, "feGaussianBlur");
    feGaussianBlur.setAttribute("in", "SourceGraphic");
    feGaussianBlur.setAttribute("stdDeviation", "8");
    feGaussianBlur.setAttribute("result", "blur");

    const feColorMatrix = document.createElementNS(svgNS, "feColorMatrix");
    feColorMatrix.setAttribute("in", "blur");
    feColorMatrix.setAttribute("mode", "matrix");
    feColorMatrix.setAttribute(
      "values",
      "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
    );
    feColorMatrix.setAttribute("result", "cm");

    filter.appendChild(feGaussianBlur);
    filter.appendChild(feColorMatrix);
    defs.appendChild(filter);
    svg.appendChild(defs);


    const group = document.createElementNS(svgNS, "g");
    group.setAttribute("filter", "url(#goo)");
    svg.appendChild(group);


    const mainCircle = document.createElementNS(svgNS, "circle");
    mainCircle.setAttribute("id", "main_circle");
    mainCircle.setAttribute("class", "st0");
    mainCircle.setAttribute("cx", "171.5");
    mainCircle.setAttribute("cy", "175.6");
    mainCircle.setAttribute("r", "130");
    group.appendChild(mainCircle);
    


    const numBubbles = 11;
    const cx = 171.5;
    const cy = 175.6;
    const r = 118.7;

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElementNS(svgNS, "circle");
      bubble.setAttribute("id", "circle");
      bubble.setAttribute("class", `bubble${i} st1`);
      bubble.setAttribute("cx", cx);
      bubble.setAttribute("cy", cy);
      bubble.setAttribute("r", r);
      group.appendChild(bubble);
      bubble.setAttribute("fill", "#2ecc71")
    }

    const select = (s) => svg.querySelector(s);


    const randomBetween = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min) || 0.5;


    const tl = gsap.timeline();

    for (let i = 0; i < numBubbles; i++) {
      const t = gsap.to(select(`.bubble${i}`), {
        duration: randomBetween(1, 1.5),
        x: randomBetween(12, 15) * randomBetween(-1, 1),
        y: randomBetween(12, 15) * randomBetween(-1, 1),
        repeat: -1,
        repeatDelay: randomBetween(0.2, 0.5),
        yoyo: true,
        ease: "elastic.out(1, 0.5)"
      });

      tl.add(t, (i + 1) / 0.6);
    }

    tl.seek(50);
  }


  loadGSAP(runAnimation);
}




