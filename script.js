const share_Buttton = document.querySelector('#share_Btn');
const author_Panel = document.querySelector('#author')
const share_Panel = document.querySelector('#share')
const share_Wrap = document.querySelector('#share_Wrap')

share_Buttton.addEventListener('click', show_Share);

function show_Share() {
    author_Panel.classList.add('off')
    share_Panel.classList.remove('off')
    share_Wrap.classList.add('dark_Bg')
    share_Buttton.removeEventListener('click', show_Share);
    share_Buttton.addEventListener('click', show_Author);
}

function show_Author() {
    share_Panel.classList.add('off')
    author_Panel.classList.remove('off')
    share_Wrap.classList.remove('dark_Bg')
    share_Buttton.addEventListener('click', show_Share);
}