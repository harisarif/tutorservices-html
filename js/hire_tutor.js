
//  hire tutor script
let stepCounter = 1;
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
let persentage = 25;
const stepPersentage = document.getElementsByClassName('percentage')[0]
const persentage_num = document.getElementsByClassName('persentage-num')[0]
const firstPageSearch = document.getElementById('page1-search');
let ul = document.getElementById('searchList');
let li = ul.getElementsByTagName('li');
let sEmail = document.querySelectorAll('input[type="email"]');

const page1List = (element) => {
    firstPageSearch.value = element.innerHTML
    for (let index = 0; index < li.length; index++) {
        li[index].style.display = 'none';
    }
}

const NextStep = (button) => {
    //set email to create account
    sEmail[1].value = sEmail[0].value;

    if (stepCounter == 4) {
        button.type = 'submit'
    }
    if (firstPageSearch.value != '' && firstPageSearch.value != ' ') {
        if (stepCounter == 1) {
            backBtn.classList.remove('d-none')
        }
        if (stepCounter < 4) {
            step = document.getElementById('page-' + stepCounter);
            step.classList.add('d-none')
            secondStep = document.getElementById('page-' + (stepCounter + 1))
            secondStep.classList.remove('d-none')
            stepCounter++
            stepPersentage.style.width = (persentage + 25) + '%';
            persentage_num.innerHTML = (persentage + 25) + '%';
            console.log(persentage);
            persentage = persentage + 25;
            if (stepCounter == 4) {
                button.type = 'button'
                button.value = 'Submit'
                console.log(stepCounter);
            }
        }
    }

}

const backStep = (button) => {
    if (stepCounter == 2) {
        button.classList.add('d-none')
    }
    if (stepCounter > 1) {
        step = document.getElementById('page-' + stepCounter)
        step.classList.add('d-none');
        backPage = document.getElementById('page-' + (stepCounter - 1))
        backPage.classList.remove('d-none')
        stepCounter--
        // console.log(stepCounter);
        persentage = persentage - 25;

        stepPersentage.style.width = persentage + '%'
        persentage_num.innerHTML = (persentage) + '%';
        // persentage = persentage + 25;
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