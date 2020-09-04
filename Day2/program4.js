console.log("Program to display only elements containing 'a' in them from a array");

function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

arr = [2, 5, 9, 6];
a=5
console.log(contains(arr, a),a,"is in",arr);