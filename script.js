const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#main-nav');
if(menuButton&&navigation){
  menuButton.addEventListener('click',()=>{
    const expanded=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!expanded));
    menuButton.setAttribute('aria-label',expanded?'Menü öffnen':'Menü schließen');
    navigation.classList.toggle('is-open',!expanded);
    document.body.classList.toggle('menu-lock',!expanded);
  });
  navigation.addEventListener('click',event=>{
    if(event.target.closest('a')){
      menuButton.setAttribute('aria-expanded','false');
      menuButton.setAttribute('aria-label','Menü öffnen');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-lock');
    }
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){
      menuButton.setAttribute('aria-expanded','false');
      menuButton.setAttribute('aria-label','Menü öffnen');
      navigation.classList.remove('is-open');
      document.body.classList.remove('menu-lock');
      menuButton.focus();
    }
  });
}

