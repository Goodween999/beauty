const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

  // Скрытый div

  function viewDiv(){
    document.getElementById("project-row-1").style.display = "block";
  };

  // Адаптиное меню

  const nav = document.querySelector('#nav');
  const navBtn = document.querySelector('#nav-btn');
  const navBtnImg = document.querySelector('#nav-btn-img');

  navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
      navBtnImg.src = "./beauty/img/icons/icon9.png";
    }
    else {
      navBtnImg.src = "./beauty/img/icons/icon8.png";
    }
  }

