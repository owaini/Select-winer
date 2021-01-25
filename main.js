const tagsEl = document.querySelector('.tags');

const textarea = document.getElementById('textarea');
const numberInput = document.getElementById('number');
const h2 = document.querySelector('h2');
const winderTag = document.querySelector('.winderTag');
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    
    textTag(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(() =>{
            e.target.value = ''
        },10);

        randomSelect();
         numberInput.value = '';
    }
})

function textTag(input) {
    
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
       tagsEl.innerHTML = '';

       tags.forEach(tag => {
           const tagEl = document.createElement('span');
           tagEl.classList.add('tag');
           tagEl.innerText = tag;
           tagsEl.appendChild(tagEl);
       })
 
}

function randomSelect() {
  
      const times = Number(numberInput.value);
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        },100);
    }, 100);
      
    setTimeout(() => {
       clearInterval(interval);

       setTimeout(() => {
           const randomTag = pickRandomTag()
           highlightTag(randomTag)
          const winer = randomTag.innerText;
          writeWiner(winer)
           console.log(winer)
       },100)
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
     return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}

function writeWiner(e) {
    winderTag.classList.add('active');
    h2.innerText = e
}