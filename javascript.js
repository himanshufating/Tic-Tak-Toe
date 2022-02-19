function fun1(){

    var div1,div2,div3,div4,div5,div6,div7,div8,div9;
    div1 =document.getElementById("div1").value;
    div2 =document.getElementById("div2").value;
    div3=document.getElementById("div3").value;
    div4=document.getElementById("div4").value;
    div5=document.getElementById("div5").value;
    div6=document.getElementById("div6").value;
    div7=document.getElementById("div7").value;
    div8=document.getElementById("div8").value;
    div9=document.getElementById("div9").value;

    if((div1 == 'X' || div1 == 'x') && (div2 == 'X' || div2 == 'x') && (div3 == 'X' ||div3 == 'x')){
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("div4").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert("Player X Won");
    }

    else if((div1 == 'X' || div1 == 'x') && (div4 == 'X' || div4 == 'x') && (div7 == 'X' ||div7 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert("Player X Won");
    }
    else if((div7 == 'X' || div7 == 'x') && (div8 == 'X' || div8 == 'x') && (div9 == 'X' ||div9 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div1").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div6").disabled = true;
        window.alert("Player X Won");
    }
    else if((div3 == 'X' || div3 == 'x') && (div5 == 'X' || div5 == 'x') && (div7 == 'X' ||div7 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div2").disabled = true;
        document.getElementById("div1").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert("Player X won");
    }
    else if((div3 == 'X' || div3 == 'x') && (div6 == 'X' || div6 == 'x') && (div9 == 'X' ||div9 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div1").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        window.alert("Player X Won");
    }
    else if((div1 == 'X' || div1 == 'x') && (div5 == 'X' || div5 == 'x') && (div9 == 'X' ||div9 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        window.alert("Player X won");
    }
    else if((div2 == 'X' || div2 == 'x') && (div5 == 'X' || div5 == 'x') && (div8 == 'X' ||div8 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div1").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert("Player X Won");
    }
    else if((div4 == 'X' || div4== 'x') && (div5 == 'X' || div5 == 'x') && (div6 == 'X' ||div6 == 'x')){
        document.getElementById('print').innerHTML = " Player X won";
        document.getElementById("div1").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert(" Player X Won ");
    }
    else if((div1 == '0' || div1 == '0') && (div2 == '0'  || div2 == '0') && (div3 == '0' || div3 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div4").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert('Player O Won');
    }
    
    else if((div1 == '0' || div1 == '0') && (div4 == '0'  || div4 == '0') && (div7 == '0' || div7 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 1
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert('Player O Won');
    }
    else if((div7 == '0' || div7 == '0') && (div8 == '0'  || div8 == '0') && (div9 == '0' || div9 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div1").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div6").disabled = true;
        window.alert('Player O Won');
    }
    else if((div3 == '0' || div3 == '0') && (div6 == '0'  || div6 == '0') && (div9 == '0' || div9 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div1").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div5").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        window.alert('Player O Won');
    }
    else if((div1 == '0' || div1 == '0') && (div5 == '0'  || div5 == '0') && (div9 == '0' || div9 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        window.alert('Player O Won');
    }
    else if((div3 == '0' || div3 == '0') && (div5 == '0'  || div5 == '0') && (div7 == '0' || div7 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div4").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div1").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert('Player O Won');
    }
    else if((div4 == '0' || div4 == '0') && (div5 == '0'  || div5 == '0') && (div6 == '0' || div6 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div1").disabled = true;
        document.getElementById("div2").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div8").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert('Player O Won');
    }
    else if((div2 == '0' || div2 == '0') && (div5 == '0'  || div5 == '0') && (div8 == '0' || div8 == '0')) {
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById("div1").disabled = true;
        document.getElementById("div4").disabled = true;
        document.getElementById("div3").disabled = true;
        document.getElementById("div7").disabled = true;
        document.getElementById("div6").disabled = true;
        document.getElementById("div9").disabled = true;
        window.alert('Player O Won');
    }

    else if((div1=='X'||div1=='0') && (div2=='X' || div2=='0') && (div3=='X' || div3=='0') &&(div4=='X' || div4=='0') &&(div5=='X' || div5=='0') &&
    (div6=='X' || div6=='0') &&(div7=='X' || div7=='0') &&(div8=='X' || div8=='0') &&(div9=='X' || div9=='0') ){
        document.getElementById('print').innerHTML ="Match Tie";
        window.alert('Match Tie');
      }  else {
             if (flag == 1){
                 document.getElementById('print').innerHTML = " Player X Turn";
             }
             else{
                document.getElementById('print').innerHTML = " Player 0 Turn";
             }
         }
    }

function fun2(){

    location.reload();
    document.getElementById("div1").value = '';
    document.getElementById("div2").value = '';
    document.getElementById("div3").value = '';
    document.getElementById("div4").value = '';
    document.getElementById("div5").value = '';
    document.getElementById("div6").value = '';
    document.getElementById("div7").value = '';
    document.getElementById("div8").value = '';
    document.getElementById("div9").value = '';
 
}
flag = 1;
function fun3() {
    if (flag == 1) {
        document.getElementById("div1").value = "X";
        document.getElementById("div1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div1").value = "0";
        document.getElementById("div1").disabled = true;
        flag = 1;
    }
}
 
function fun4() {
    if (flag == 1) {
        document.getElementById("div2").value = "X";
        document.getElementById("div2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div2").value = "0";
        document.getElementById("div2").disabled = true;
        flag = 1;
    }
}
 
function fun5() {
    if (flag == 1) {
        document.getElementById("div3").value = "X";
        document.getElementById("div3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div3").value = "0";
        document.getElementById("div3").disabled = true;
        flag = 1;
    }
}
 
function fun6() {
    if (flag == 1) {
        document.getElementById("div4").value = "X";
        document.getElementById("div4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div4").value = "0";
        document.getElementById("div4").disabled = true;
        flag = 1;
    }
}
 
function fun7() {
    if (flag == 1) {
        document.getElementById("div5").value = "X";
        document.getElementById("div5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div5").value = "0";
        document.getElementById("div5").disabled = true;
        flag = 1;
    }
}
 
function fun8() {
    if (flag == 1){
        document.getElementById("div6").value = "X";
        document.getElementById("div6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div6").value = "0";
        document.getElementById("div6").disabled = true;
        flag = 1;
    }
}
 
function fun9() {
    if (flag == 1) {
        document.getElementById("div7").value = "X";
        document.getElementById("div7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div7").value = "0";
        document.getElementById("div7").disabled = true;
        flag = 1;
    }
}
 
function fun10() {
    if (flag == 1) {
        document.getElementById("div8").value = "X";
        document.getElementById("div8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div8").value = "0";
        document.getElementById("div8").disabled = true;
        flag = 1;
    }
}
 
function fun11() {
    if (flag == 1) {
        document.getElementById("div9").value = "X";
        document.getElementById("div9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("div9").value = "0";
        document.getElementById("div9").disabled = true;
        flag = 1;
    }
}