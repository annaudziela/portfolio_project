import '../scss/main.scss';


fetch('https://api.github.com/users/annaudziela/repos?sort=created&direction=asc')
.then((res) => res.json())
.then((res) => {
  const gridBox = document.querySelector('.projects-grid--js');
  for (let repo of res) {
    const {description, homepage, html_url, name} = repo;
const template = ` <article class="project">
<div class="project__beam">
  <div class="project__dot"></div>
  <div class="project__dot"></div>
  <div class="project__dot"></div>
</div>
<div class="project__content">
  <img class="project__image" src="public/img/Github Icon Big.svg">
<h3 class="project__grid project__title">
<span class="project__label">project:</span> <span class="project__title--special">${name}</span>
</h3>
<p class="project__grid">
  <span class="project__label">description:</span
    ><span>${description}</span>
</p>
<p class="project__grid project__grid--special">
  <span class="project__label">demo:</span
    ><span
    >&lt;<a class="project__link" 
    href="${homepage}" 
    title="${name}">see_here</a
      >&gt;</span
      >
</p>
<p class="project__grid">
  <span class="project__label">github:</span>
  <span>
    &lt;<a class="project__link" 
    href="${html_url}" 
    title="${name}">source_code</a>&gt;
  </span>
</p>
</div>
</article> `;

gridBox.innerHTML += template;

  }
})
.catch((e) => console.log(e));





