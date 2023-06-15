function DoCal(){
    // prompt로 숫자 두개와 연산자를 입력받음
    // 값을 입력 받음
    let a = parseInt(prompt("숫자 a를 입력하세요"));
    let b = parseInt(prompt("숫자 b를 입력하세요"));
    let op = prompt("연산자를 입력하세요[+,-,*,/]");
    let result=0;
    if(isNaN(a) || isNaN(b)){   // a와 b가 숫자가 아닌 경우
        return; // 아무것도 반환하지 않고 함수를 종료함
    }
    // 숫자와 연산자가 입력되었으면 연산을 수행한다
    switch(op){
    case '+' : 
        //result = a + b;
        result = a+b;
        break; 
    case '-' :
        //result = a - b;
        result = a-b;
        break;
    case '*' :
        //result = a * b;
        result = a*b;
        break;
    case '/' :
        //result = a / b;
        result = a/b;
        break;
    default :
        console.log("연산자를 잘못입력하셨습니다.");
    }
    // 연산된 값 반환
    return result;
    
}