const modalButton = document.querySelector('.search__link');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__button');

modalButton.addEventListener("click", (evt)=>{
  evt.preventDefault;
  modal.classList.remove("modal--closed");
});

closeButton.addEventListener("click", (evt)=>{
  modal.classList.add("modal--closed");
})
