
// // Asal sayılar
// function findPrime(...numbers) {
//     for (let i = 0; i < numbers.length; i++) {
        
//         let isPrime = 0;

//         for (let j =2; j < numbers[i]; j++) {
//             if(numbers[i] % j == 0){
//                 isPrime++;    
//             }
//         }

//         if (isPrime == 0) {
//             console.log(numbers[i]+ " asaldır.") 
//         }
//         else{
//             console.log(numbers[i]+ " asal değildir.")
//         }
        
        
//     }
// }

// findPrime(5,6,7,8,9)

// arkadaş sayılar

// function isFriend(num1, num2) {
//     let total1 = 0;
//     let total2 = 0;
//     for( let i = 1; i < num1; i++) {
//         if(num1%i == 0) {
//             total1 +=i;
//         }
//     }
//     if ( total1 == num2) {
//         for (let i = 1; i < num2; i++) {
//             if(num2%i == 0) {
//                 total2 +=i;
//             }
//         }
//         if(total2 == num1) {
//             console.log("Arkadaş sayı") 
//         }       
//     }else {    
//         console.log("Arkadaş sayı değil")
//     }
// }

// isFriend(220, 284)


//1000 e kadar olan mükemmel sayılar

// let numbolensTop = 0; 

// for (let i = 0; i < 1000; i++) {  
//     for (let j = 1; j <= i; j++) {
//         if (i%j == 0) {
//             numbolensTop +=j;
//         }
//         if(i*2 == numbolensTop)  {
//             console.log(i +" mükemmel sayıdır.")
//             numbolensTop = 0;
//         }       
//     }
//     numbolensTop = 0;
// }


// Asal sayılar
// function findPrime1000() {
//     for (let i = 2; i <= 1000; i++) {
//         isPrime = 0;
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 isPrime++;
//             }
//         }
//         if (isPrime == 0) {
//             console.log(i +" asal");
//         }
//     }
// }
// findPrime1000();