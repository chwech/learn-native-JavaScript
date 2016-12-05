class Myclass{
    constructor(){
        this.message = 'hello class setter and getter';
    }

    get prop(){
        return this.message;
    }

    set prop(value){
        console.log('setter: ' + value);
    }
}

var mc = new Myclass();

console.log(mc.prop);//hello class setter and getter

mc.prop = 'set 123'; //setter: set 123


