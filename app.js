const toggleList = (heading, ToggleUl) => {
    const ul = document.getElementById(ToggleUl);
    if (ul.style.height != '200px') {
        ul.classList.add('border')
        ul.style.height = '200px'
    } else {
        ul.style.height = '0'
        ul.classList.remove('border')
    }
    if (heading.children[0].style.transform != 'rotate(180deg)') {
        heading.children[0].style.transform = 'rotate(180deg)';
    } else {
        heading.children[0].style.transform = 'rotate(0deg)'
    };
}

const dropDown = (dropDownContent) =>{
    var dropContent = document.getElementById(dropDownContent);
    if (dropContent.style.height != 'auto') {
        dropContent.style.height = 'auto'
    } else {
        dropContent.style.height = '0'
    }
}
const hideNShow = (toggleItem) => {
    const vToggleItem = document.getElementById(toggleItem);
    vToggleItem.classList.toggle('mb_filter');
}
