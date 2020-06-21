const tabitems = document.querySelectorAll('.tab-item')
const tabcontentitems = document.querySelectorAll('.tab-content-item')

function setborder(item) {
    console.log(item)
    removeborder();
    removeContent();
    item.classList.add('tab-border');
    const tabContentSelector = document.getElementById(`${item.id}-content`);
    tabContentSelector.classList.add('show');
}

function removeborder() {
    tabitems.forEach(item => item.classList.remove('tab-border'))
}

function removeContent() {
    tabcontentitems.forEach(item => item.classList.remove('show'))
}

tabitems.forEach(item => item.addEventListener('click', (function click(_item) {
    return function () {
        setborder(_item)
    }
}(item))));