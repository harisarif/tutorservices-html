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

const hideNShow = (toggleItem) => {
    const vToggleItem = document.getElementById(toggleItem);
    vToggleItem.classList.toggle('mb_filter');
}

/* FAQ */

const toggle = (para,arr) => {
    const dropcontent = document.getElementById(para);
    const arrow = document.getElementById(arr);
        if (dropcontent.style.height !='auto') {
            dropcontent.style.height = 'auto'; 
            arrow.style.transform = 'rotate(180deg)';
        } else {
            dropcontent.style.height = '0';
            arrow.style.transform = 'rotate(0deg)';
        }
     }