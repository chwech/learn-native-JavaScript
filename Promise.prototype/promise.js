/**
 * Created by chwech on 16-12-8.
 */

function timeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value)=>{
    console.log(value); // done
});
