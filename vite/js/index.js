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


// console.log("import.meta.env",import.meta.env);
