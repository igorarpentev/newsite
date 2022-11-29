//Прокрутка к плееру при клике на смотреть бесплатно//
function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var smotr = document.querySelector('.smotr');
  var contacts = document.querySelector('#contacts');
  
  smotr.addEventListener('click', () => {
    scrollTo(contacts);
  })

//Прокрутка в начало страницы при клике на выбранный уже фильм//
  function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var name_now = document.querySelector('.name_now');
  var header = document.querySelector('#header');
  
  name_now.addEventListener('click', () => {
    scrollTo(header);
  })