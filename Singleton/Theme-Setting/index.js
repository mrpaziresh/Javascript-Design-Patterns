class setting {

    constructor(){
        if(setting.instance){
          return setting.instance;
        }
        else {
            setting.instance = 'dark'
        }       
        this.theme = 'dark'
        setting.instance = this;
    }

    getTheme() {
        return setting.instance;
    }

    setTheme(newTheme) {
        setting.instance = newTheme;
        return setting.instance;
    }

}
const setNewTehme = new setting();
console.log(setNewTehme.getTheme())


const setAnotherTheme = new setting()
setAnotherTheme.setTheme("light")


console.log(setNewTehme.getTheme())