//Reversing array
var array = [-10, 1, 2, 3, -5, 7, 3, 4, -3, 5, 8, -6, 9, 10, -9, 5, 30];
temp = 0;
for (var i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = temp;
}
console.log(array);