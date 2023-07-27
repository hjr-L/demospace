const koa = require('koa');
const fs = require('fs');
const path = require('path');
const app = new koa();

app.use(async(cxt)=>{
    console.log(cxt.request);
    if(cxt.request.url == '/'){
        const indexHtml = await fs.readFileSync(path.resolve(process.cwd(), 'index.html'));
        cxt.response.body = indexHtml.toString();
        cxt.response.set('Content-type', 'text/html');
    }
    if(cxt.request.url == '/src/main.js'){
        const mainJS = await fs.readFileSync(path.resolve(process.cwd(), 'src/main.js'));
        cxt.response.body = mainJS.toString();
        cxt.response.set('Content-type', 'text/javascript');
    }
    if(cxt.request.url == '/src/App.vue'){
        const appVue = await fs.readFileSync(path.resolve(process.cwd(), 'src/App.vue'));
        cxt.response.body = appVue.toString();
        cxt.response.set('Content-type', 'text/javascript');
    }
})

app.listen(9001, ()=>{
    console.log('app service');
})