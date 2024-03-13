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
// footer//

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

 window.addEventListener('load',()=>{
    setTimeout(()=>{
    const MODAL_BOX = document.getElementById('allModal');
    MODAL_BOX.style.display = 'flex';
    MODAL_BOX.children[0].classList.add('dropModal')
    },1000)
 })
//  hire tutor script
let stepCounter = 1;
        const backBtn = document.getElementById('back-btn');
        const nextBtn = document.getElementById('next-btn');
        let persentage = 20;
        const stepPersentage = document.getElementsByClassName('percentage')[0]
        const persentage_num = document.getElementsByClassName('persentage-num')[0]
        const firstPageSearch = document.getElementById('page1-search');
        let ul = document.getElementById('searchList');
        let li = ul.getElementsByTagName('li');

        const page1List = (element) =>{
            firstPageSearch.value = element.innerHTML
            for (let index = 0; index < li.length; index++) {
                li[index].style.display = 'none';
            }
        }

        const NextStep = (button) => {
          if (firstPageSearch.value != '' && firstPageSearch.value != ' ') {
            if(stepCounter == 1){
              backBtn.classList.remove('d-none')
            }
            if (stepCounter < 5) {
                step = document.getElementById('page-' + stepCounter);
                step.classList.add('d-none')
                secondStep = document.getElementById('page-' + (stepCounter + 1))
                secondStep.classList.remove('d-none')
                stepCounter++
                stepPersentage.style.width = (persentage + 20) + '%';
                persentage_num.innerHTML = (persentage + 20) + '%';
                console.log(persentage);
                persentage = persentage + 20;
                if(stepCounter == 5){
                    button.type = 'submit'
                    button.innerHTML = 'Submit'
                }
            }
          } else {
            alert('Please fill the input');
          }
            //  else {
            //     alert('all pages done')
            // }
        }

        const backStep = (button) =>{
            if(stepCounter == 2){
                button.classList.add('d-none')
            }
            if (stepCounter > 1) {
                step = document.getElementById('page-' + stepCounter)
                step.classList.add('d-none');
                backPage = document.getElementById('page-' + (stepCounter - 1))
                backPage.classList.remove('d-none')
                stepCounter--
                // console.log(stepCounter);
            persentage = persentage - 20;
          
                stepPersentage.style.width = persentage + '%'
                persentage_num.innerHTML = (persentage) + '%';
                // persentage = persentage + 20;
                nextBtn.type = "button"
                nextBtn.innerHTML = 'Next'
            } 
        }

/* Search Filter Script */

firstPageSearch.addEventListener('input', function () {
            let filter = this.value.toUpperCase();

            for (let i = 0; i < li.length; i++) {
                let textValue = li[i].textContent || li[i].innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = 'block';
                } else {
                    li[i].style.display = 'none';
                }
            }
        });