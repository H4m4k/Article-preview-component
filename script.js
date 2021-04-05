const share_Buttton = document.querySelector('#share_Btn');
const author_Panel = document.querySelector('#author')
const share_Panel = document.querySelector('#share')
const share_Wrap = document.querySelector('#share_Wrap')
const icon = document.querySelector('#svg_Icon')

share_Buttton.addEventListener('click', () => {
    if(window.innerWidth > 375) {
        console.log('test działa')
        return show_Share_Desktop();
    }
    return show_Share() });


    

function show_Share() {
    author_Panel.classList.add('off')
    share_Panel.classList.remove('off')
    share_Wrap.classList.add('dark_Grey_Bg')
    icon.attributes[1].value = '#fff';
    share_Buttton.classList.add('desaturated_Grey_Bg')
    share_Buttton.removeEventListener('click', show_Share);
    share_Buttton.addEventListener('click', show_Author);

}

    function show_Share_Desktop() {
        share_Panel.classList.remove('off')
        share_Panel.classList.add('dark_Grey_Bg')
        icon.attributes[1].value = '#fff';
        share_Buttton.classList.add('desaturated_Grey_Bg')
        share_Buttton.removeEventListener('click', show_Share_Desktop);
        share_Buttton.addEventListener('click', show_Author_Desktop);
    }

function show_Author() {
    share_Panel.classList.add('off')
    author_Panel.classList.remove('off')
    share_Wrap.classList.remove('dark_Grey_Bg')
    icon.attributes[1].value = '#6E8098';
    share_Buttton.classList.remove('desaturated_Grey_Bg')
    share_Buttton.addEventListener('click', show_Share);
    share_Buttton.removeEventListener('click', show_Author);
}

    function show_Author_Desktop() {
        share_Panel.classList.add('off')
        share_Panel.classList.remove('dark_Grey_Bg')
        icon.attributes[1].value = '#6E8098';
        share_Buttton.classList.remove('desaturated_Grey_Bg')
        share_Buttton.addEventListener('click', show_Share_Desktop);
        share_Buttton.removeEventListener('click', show_Author_Desktop);
    }