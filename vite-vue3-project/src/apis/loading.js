import { ElLoading } from "element-plus";

export default class AxiosLoading{

    loadingCount = 0;
    loadingInstance = null;

    constructor(){
        this.loadingCount = 0;
    }

    initLoading(){
        if(this.loadingInstance){
            this.loadingInstance.close();
        }
        this.loadingInstance = ElLoading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }

    addLoading(){
        if(this.loadingCount === 0){
            this.initLoading();
        }
        this.loadingCount++;
    }

    closeLoading(){
        if(this.loadingInstance && this.loadingCount > 0){
            if(this.loadingCount === 1){
                this.loadingInstance.close();
            }
            this.loadingCount--;
        }
    }
}