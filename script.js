const blockColors = document.querySelectorAll('.block-colors');

const tagAdd = '<span class="desciption-colors">Color</span>'

function getRandomColors(length) {
    let result = '';
    const colors = '0123456789ABCDEF';
    for (let i = 0; i < length; i++) {
        result += colors.charAt(Math.floor(Math.random() * colors.length));
    }
    return '#' + result
}

window.addEventListener('click', (event) => {

    if (event.target.closest('#btn')) {
        blockColors.forEach((item) => {
            item.style.backgroundColor = getRandomColors(6);
            item.innerHTML = `<span class="desciption-colors" style="backgorund: ${getRandomColors(6)}">${getRandomColors(6)}</span>`;
        })
    }
})