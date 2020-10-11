const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
// for(i=1,i<5,i++){
//     let nmSrc='images/pic'+ i +'.jpg';
//     const newImage = document.createElement('img');
//     newImage.setAttribute('src',nmSrc);
//     thumbBar.appendChild(newImage);
//     newImage.onclick=function(nmSrc){
//      displayedImage.setAttribute('src',nmSrc);
//     }  

// }
// const displayedImage = document.querySelector('.displayed-img');
// const thumbBar = document.querySelector('.thumb-bar');

// const btn = document.querySelector('button');
// const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++) {
    let nmSrc= 'images/pic' + i + '.jpg';
  const newImage = document.createElement('img');
  newImage.setAttribute('src', nmSrc);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;//Esto hace que el src del displayImage sea igual al src del elemento que se ha hecho click.
  }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
