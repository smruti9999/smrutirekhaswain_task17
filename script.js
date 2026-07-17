//js arrow function division using promise
const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};
//division 10 by 2
console.log("Dividing 10 by 2...");
divide(10,2).then(result => {
    console.log("Result:",result);
})
//division 10 by 0
console.log("Dividing 10 by 0...");
divide(10,0).then(result => {
    console.log("Result:",result);
})
.catch(error => {
    console.log("Error:", error);
})


//Using 5 dummy values
const numbers = [
    [30, 2],
    [36, 4],
    [18, 0],
    [40, 8],
    [60, 6]
];
numbers.forEach(([num1, num2], index) => {
    console.log(`Ex ${index + 1}`);
    console.log(`Dividing ${num1} by ${num2}...`);
    divide(num1, num2).then(result =>{
        console.log("Result:", result);
    })
    .catch(error => {
        console.log("Error:", error);

    })
    .finally(() => {
        console.log(".....");
    });
});

