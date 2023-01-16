var a,b,c;
function btnClicked(num) {
    document.getElementById("textArea").value=document.getElementById("textArea").value+num;
}

function clearBtn(){
    document.getElementById("textArea").value="";
}

function divisionBtn(op){
    c=op
    a=document.getElementById("textArea").value
    document.getElementById("textArea").value=""
}

function multiplicationBtn(op){
    c=op
    a=document.getElementById("textArea").value
    document.getElementById("textArea").value=""
}

function additonBtn(op){
    c=op
    a=document.getElementById("textArea").value;
    document.getElementById("textArea").value="";    
}

function substractionBtn(op){
    c=op
    a=document.getElementById("textArea").value
    document.getElementById("textArea").value=""
}

function equalBtn(){
    b=document.getElementById("textArea").value;
    if (c=='/') { 
        var sum=parseFloat(a)/parseFloat(b);
    }else if(c=='*'){
        var sum=parseFloat(a)*parseFloat(b);
    }else if(c=='+'){
        var sum=parseFloat(a)+parseFloat(b);
    }else if(c=='-'){
        var sum=parseFloat(a)-parseFloat(b);
    }
    document.getElementById("textArea").value=sum;
}