// function recur (num) {
//     console.log(num);
//     if (validación) {
        // llamados recursivos
//     }else{
    // llamados normales, sin recursividad
//     }
// }

let nume = 0;
const otherNume=[1,2,3,4,5,6,7,8,9,8,78,7,4,5,6,3,2,1]

// for(let i = 0; i < otherNume.length; i++ ){
//     nume = otherNume[i]
//     console.log(i, nume);
// }

function recur(numbers) {
    if (!numbers.length == 0) {
        const first = numbers[0]
        console.log(first);
        numbers.shift()
        recur(numbers)
    }
}
console.log(recur(otherNume))
