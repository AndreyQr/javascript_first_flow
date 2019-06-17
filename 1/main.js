const modal_block = document.querySelector('.block');
const show_button = document.querySelector('button');
const close_button = document.querySelector('span')
show_button.addEventListener('click', function () {
    modal_block.classList.remove('hidden');
});
close_button.addEventListener('click', function () {
    modal_block.classList.add('hidden');
});