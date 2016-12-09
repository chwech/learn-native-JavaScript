/**
 * Created by chwech on 16-12-8.
 */
function loadImageAsync(url){
    return new Promise((resolve, reject) => {
        var image = new Image();
        image.onload = function(){
            resolve(image);
        };
        image.onerror = function(){
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}