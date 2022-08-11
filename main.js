let boxes = document.querySelectorAll('div');
let container = document.querySelector('section');

boxes.forEach(box => {
  box.addEventListener('click', (e) => {
    if (box.className === 'class1') {
      box.classList.add('class2');
      box.classList.remove('class1');
      box.style.transition = '1s'
    } else {
      box.classList.add('class1');
      box.classList.remove('class2');
      box.style.transition = '1s'
    }
  })
  box.addEventListener('contextmenu', (e) => {
    if (confirm('Are you sure you want to delete this box?')) {
      box.remove(this);
    }
  })
  box.addEventListener('dblclick', (e) => {
    
  })
});

