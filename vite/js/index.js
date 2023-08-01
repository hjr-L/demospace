import {count} from './count.js';
import indexCss from  '../css/index.module.css';
import aCss from '../css/a.module.css';
import indexLess from  '../less/index.module.less';
import '../css/b.css';
console.log(indexCss);
console.log(aCss);
console.log(indexLess);
document.getElementsByClassName('footer')[0].className = indexCss.footer;
document.getElementsByClassName('footer_content')[0].className = indexLess.footerContent;
import svg from '@assets/vue.svg'
import svgRaw from '@assets/vue.svg?raw'
console.log(svg);

const img = document.createElement('img');
img.src = svg;
document.getElementsByClassName('img')[0].appendChild(img);
const svgEl = document.getElementsByClassName('svg')[0];
svgEl.innerHTML = svgRaw;
svgEl.addEventListener('click', function(){
    this.style.fill = 'red'
})
// console.log("import.meta.env",import.meta.env);


