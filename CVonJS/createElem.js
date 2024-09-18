export function createElem(elem, elemClass,elemText=null) {
    const element = document.createElement(`${elem}`)
    element.classList.add(elemClass)
    elemText ? element.textContent = elemText:null
    return element
}

export default function addList(content){

    var liList = document.createElement('li');
    liList.textContent = content;

    return liList;
}

export function addUlist(className){

  
    var ulList = document.createElement('ul');
  
    ulList.classList.add(className);
  
    return ulList;
  }
  