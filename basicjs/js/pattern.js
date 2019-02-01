// for(var i=0; i<=5; i++){
//     for (var j = 5; j>=5-i; j--){
//         document.write(j);
//     }
//     document.write("<br>");
// }

//      5
//     54
//    543
//   5432
//  54321
// 543210


// for(i=1; i<=6; i++){

//     for (var j = 6; j >=i; j--) {
//         document.write("\xa0\xa0");
//     }
//     for( var k=5; k>=6-i;k--){
//         document.write(k);
//     }
//     document.write("<br>")
// }
// for(var i=0; i<=5; i++){
//     for(var j=0; j<=4-i; j++){
//         document.write("\xa0");
//         }
//         for(var j=5; j>=5-i; j--){
//             document.write(j);
//         }
//         document.write("<br>")
// }

// for(i=1;i<=9;i++){
//     if(i%3==1){
//         document.write("<br>");
//     }
//         document.write(i);   
// }

// for(i=2;i<=4;i++){
//     for(j=1;j<=4;j++){
//         document.write(i*j);
//     }
//     document.write("<br>");
// }


// for (i = 1; i <= 5; i++) {
//      for(j=1;j<=i;j++){
//          if(i%2==1){
//              callme();        
//          }
//          else{
//             callme2();
//          }
//     }     
//     document.write("<br>");
// }





// function callme() {
//     if (j % 2 == 0) {
//         document.write(0);
//     }
//     else {
//         document.write(1);
//     }
// }
// function callme2() {
//     if (j % 2 == 0) {
//         document.write(1);
//     }
//     else {
//         document.write(0);
//     }
// // }
// for (i = 1; i <= 5; i++) {
//      for(j=4;j>0;j--){
//          document.write("*");
//      }
//      document.write("<br>");
//     } 

for(var i=1; i<=5; i++){
    if(i/2<2){
        for(var j=3-i; j>0; j--){
            document.write("\xa0\xa0");
        }}
       
    else if(i/2>=2) {
        for (var j =2; j <i-1; j++) {
            document.write("\xa0\xa0");
        }}
        document.write("*")
        if (i / 2 <2 && i!=1) {
            for (var j = 0; j <= i - 1; j++) {
            document.write("\xa0\xa0");
            } document.write("*");}
            else if(i/2>=2 && i!=1){
                for(var j = 2; j < i - 1; j++) {
                document.write("\xa0\xa0");
            }
            document.write("*");}
    document.write("<br>");

    }
