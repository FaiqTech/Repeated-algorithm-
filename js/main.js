// // //*arrayin icinden en kicik reqemi cxart
// // //?   metodnan

// var array = [2, 5, 4, 1, 22, 77, 23, 97];

// console.log(Math.min(...array));

// // //?   custome

// var min = array[0];
// for (let index = 0; index < array.length; index++) {
//   if (min > array[index]) {
//     min = array[index];
//   }
// }
// console.log(min);

// //* promptdan daxil edilen 10 ededin cemi

// var cem = 0;

// for (var i = 0; i < 10; i++) {
//   cem += parseFloat(prompt("ədədi daxil edin"));
// }

// alert("Daxil edilən ədədlərin cəmi: " + cem);

// //* promptdan daxil edilen 10 musbet ededlerin  cemi

// let cem = 0;

// for (let i = 0; i < 10; i++) {
//   let eded = parseFloat(prompt("Müsbət ədəd daxil edin:"));

//   if (eded > 0) {
//     cem += eded;
//   } else {
//     alert("musbet ədəd daxil edilməyib. Yenidən cəhd edin.");
//   }
// }

// alert("Daxil edilmiş 10 müsbət ədədlərin cəmi: " + cem);

// //* promptan daxil edilen ededin 0, musbet ve ya menfi oldugnu tap

// let eded = prompt("eded daxil edin ");

// if (eded > 0) {
//   alert("eded musbetdir");
// } else if (eded < 0) {
//   alert("eded menfidir");
// } else {
//   alert("eded o a beraberdir");
// }

// //* promptdan daxil edilen ededin 5 e bolunub bolunmediyini tap

// var eded = prompt("eded daxil edin");

// if (eded % 5 == 0) {
//   alert("Eded 5-e tam bölünür");
// } else {
//   alert("Eded 5-e tam bölünmür");
// }

// // //* diskrminantin tapilmasi

// var b = prompt("b eded daxil edin");
// var a = prompt(" a eded daxil edin");
// var c = prompt("c ededini daxil edin");
// if (a == "" || b == "" || c == "") {
//   alert("Bos xanani doldurunuz!");
// } else {
//   var b = b * b;
//   var dis = b - 4 * (a * c);
// }
// alert(`Diskriminant: ${dis}`);

// //* promptan daxil edilen ededden , hemin ededin reqemlerinin cemini cixmaq

// var eded = prompt("Ededi daxil edin:");
// let remember = eded;
// var cem = 0;

// while (eded !== 0) {
//   var qaligi = eded % 10;

//   eded = Math.floor(eded / 10);

//   cem += qaligi;
// }
// let result = remember - cem;
// alert(result);

// //* 1) Bir array’iniz  var ve bir funksiya yaradirsiz eğer arayın ici doludursa
// //* sonuncu elementi qaytaracaq eğer arrayin ici bosdusa ekrana -1 qaytaracaq

// function findArray(array) {
//   if (array.length > 0) {
//     return array[array.length - 1];
//   } else {
//     return -1;
//   }
// }

// var fullArray = [7, 22, 35, 42, 59];
// var emptyArray = [];

// console.log(findArray(fullArray));
// console.log(findArray(emptyArray));

// //! 2) Bir mix array’iniz var 30’dan boyuk ededleri artan sıra ile ekranda göstermek

// let mixArray = [20, 30, 66, 50, 32, 90];

// let number = 30;
// let arr2 = [];

// for (let index = 0; index < array.length; index++) {
//   if (arr[index] > number) {
//     arr2.push(arr[i]);
//   }
// }

// //* 3) isdifadeci reqem daxil edir 4reqemli  ve reqemlerinin icinde 2 ve 3’cu reqemler eger cutduse
// //* ekrana her ikisi cutdur cixacaq eğer biri tek biri cutdurse ekrana biri tek biri cutdur cixacaq
// //* eks halda her ikisi tekdise ekrana her ikisi tekdir cixacaq

// var eded = prompt(" 4 rəqəmli bir ədəd daxil edin:");

// var ikinciReqem = +eded[1];
// var ucuncuReqem = +eded[2];

// // 2-ci və 3-cü rəqəmləri yoxlayiriq
// if (ikinciReqem % 2 === 0 && ucuncuReqem % 2 === 0) {
//   alert("Hər ikisi cüt rəqəmdir.");
// } else if (ikinciReqem % 2 === 0) {
//   alert("Biri cüt, biri təkdir.");
// } else if (ucuncuReqem % 2 === 0) {
//   alert("Biri tək, biri cüt.");
// } else {
//   alert("Hər ikisi də təkdir.");
// }

// //! 4)  Daxil olan ededden sonraki ilk n sade ededi tap

// //* 5)  n=7

// //1
// //1 2
// //1 2 3
// //1 2 3 4
// //1 2 3 4 5
// //1 2 3 4 5 6
// //1 2 3 4 5 6 7

// //burada n- piramidanin hundurluyunu teyin edir(setir sayini)
// function pyramid(n) {
//   // bu bos strinq piramidin hər bir sətirini təmsil edəcəkdir.
//   var string = "";
//   //setir sayini teyin eden funksiya, hər dövrədə bir sətir əlavə olunur.
//   for (let i = 1; i <= n; i++) {
//     //hər bir sətirdəki rəqəmləri təyin edir və onları boşluq ilə artıraraq string simvol sirasına əlavə edrik.
//     for (let j = 1; j <= i; j++) {
//       // Rəqəmləri boşluq ilə artıraraq strinqe  əlavə edriy.
//       string += j + "";
//     }
//     // Hər bir sətirin sonuna bir yeni sətir əlavə edir.
//     string += "\n";
//   }
//   return string;
// }
// console.log(pyramid(7));

// //*  6) a = 2 setirin sayi
// //*  b = 5 sutunun sayi

// //**
// //**
// //**
// //**
// //**

// let a = 4;
// let b = 5;
// let str = "";

// for (let i = 0; i < b; i++) {
//   for (let j = 0; j < a; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// //*  7)  mix array verilib icinde stringleri ekrana cixardın

// function displayString(mixArray) {
//   for (let i = 0; i < mixArray.length; i++) {
//     if (typeof mixArray[i] === "string") {
//       console.log(mixArray[i]);
//     }
//   }
// }

// var mixArray = [6, "bmw", 12, "mercedes", "audi", 42, "porsche"];
// displayString(mixArray);

// //* 8)  mix(yəni string,null,{} və.s) array verilib  icinde ededleri ekrana cixardın

// function displayNumber(mixArray) {
//   for (let i = 0; i < mixArray.length; i++) {
//     if (typeof mixArray[i] === "number") {
//       console.log(mixArray[i]);
//     }
//   }
// }

// var mixArray = [5, "porsche", null, 15, "mercedes", {}, "audi", 25, "audi"];
// displayNumber(mixArray);

// //* 9)  bir array və içində bir neçə elementlər var içerisinde sonu 9’olan neçə element var

// function endingNine(arr) {
//   let counter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 10 === 9) {
//       counter++;
//     }
//   }

//   return counter;
// }

// var mixArray = ["a", 29, "b", null, 59, "bmw", 79, null, 99];
// var result = endingNine(mixArray);

// console.log("Sonu 9-ile bitən elementlərin sayı:" + result);

// //!  10)  input ile daxil olunan ededin sade yoksa mürekkep oldugunu tapin

// //* 11)  input ile daxil olunan ededin reqemlerinnen en boyuyunu tapin

// let Input = prompt("Bir ədəd daxil edin:");
// //split('') metodu ilə ədədi rəqəmlərə bölür ve erreye cevirir
// //map(Number) hissəsi ilə hər bir array elementini rəqəm formatına çeviririk.
// //... operatoru ilə arrayin elementlərini ayrı-ayrı argumentlara çeviririk.
// let maxReqem = Math.max(...Input.split("").map(Number));

// console.log("Ən böyük rəqəm:", maxReqem);

// //* a=?  b=?

// const a = [{ count: 4 }, { count: 5 }, { count: 6 }];

// const b = a.filter(({ count }) => count >= 5);

// b.forEach((unit) => {
//   unit.count *= 2;
// });

// console.log(a); // Çıktı: [{ count: 4 }, { count: 10 }, { count: 12 }]
// console.log(b); // Çıktı: [{ count: 10 }, { count: 12 }]

// //* her reqemdenden necedene olmasinin sayini tap

// const firstvalue = "add";

// const secondvalue = "succes";

// function countCharObject(stringInput) {
//   let output = {};
//   for (let char of stringInput) {
//     if (output[char]) {
//       output[char]++;
//     } else {
//       output[char] = 1;
//     }
//   }
//   return output;
// }

// console.log(countCharObject(firstvalue)); // {a:1, d:2}
// console.log(countCharObject(secondvalue)); // {s:3, u:1, c:2, e:1}
