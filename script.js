const author_Button = document.querySelector('#share_Btn');
const author_Panel = document.querySelector('#author')
const share_Panel = document.querySelector('#share')

author_Button.addEventListener('click', show_Share);

function show_Share() {
    author_Panel.classList.add('off')
    share_Panel.classList.remove('off')
    author_Button.removeEventListener('click',show_Share)
}

function show_Author() {
    share_Panel.classList.add('off')
    author_Panel.classList.remove('off')
}