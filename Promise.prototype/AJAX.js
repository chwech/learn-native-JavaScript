/**
 * Created by chwech on 16-12-8.
 */
var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if(this.readyState !== 4 ) {
                return;
            }
            if(this.status === 200) {
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
};

getJSON('/posts.json').then(function(json){
    console.log('Contents: ' + json);
}, function(error){
    console.log('出错了', error);
});