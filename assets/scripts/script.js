//  BISMILLAH


// Modal ucun kodlar
const searchBtn = document.querySelector('.search-btn')
const modal = document.querySelector('.modal')
const modalCloser = document.querySelector('.modal-closer')


searchBtn.addEventListener('click' , (e)=> {
    modal.classList.add('m-display')    
})

modalCloser.addEventListener('click' , (e)=> {
    modal.classList.remove('m-display')
})