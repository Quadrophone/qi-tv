'use strict';

/* Filters 
filter('searchFilter', function ($filter) {

    return function (array, q) {
        
        console.log('data-entry: ', array.length);

        var filter = $filter('filter');

        var lookFor = function (word, data, cb) {
            var dataRes = filter(data, word);
            cb(dataRes);
        }


        var search = function (index, words, data, cb) {
            var word = words[index];
            lookFor(word, data, function (dataRes) {
                console.log('data-current: ', dataRes.length);
                if (index < words.length - 1) {
                    index += 1;
                    search(index, words, dataRes, cb);
                } else {
                    cb(dataRes);
                }
            });
        }

        if (q && q.text) {
            var words = q.text.split(' ');
            var index = 0;

            if(array){
                //console.log(array.length);
            }

            search(index, words, array, function (dataRes) {
                array = dataRes;
            });
        }
        return array;
    }


});*/