function op_btn(value){
    // 연산자 버튼이 눌렸을 때 실행할 내용
    // 1. 저장된 연산자가 없으면 저장
    // 2. 저장된 연산자가 있고
        // ->num2가 없으면 기존 연산자를 갱신
        // ->num2가 있으면 무시
    op.value = value;
}
function Do_btn(){
    // 계산 버튼이 눌렸을 때 실행할 내용
}
function num_btn(value){
    // 연산자 버튼이 눌렸는지 확인을 하고
    // 1. 안눌렸으면 num1에 숫자를 저장
    // 2. 눌렸으면 num2에 숫자를 저장
    if(check_op() != true) {
        // 연산자 입력 전 : num1에 저장
        save_num("num1",value);
    } else {
        // 연산자 입력 후 : num2에 저장
        save_num("num2",value);
    }
}

function check_op(){
    if(op.value == ""){ return false; }
    return true;
}

function save_num(target, value){
    let result = 0;
    if(target == "num1"){
        result = num1.value*10 + Number(value);
        num1.value = result;
    }else{
        result = num2.value*10 + Number(value);
        num2.value = result;
    }
    // 숫자 버튼이 눌렸을 때 실행할 내용
    let display = document.querySelector(".display");   
    //num1.value = Number(value);
    // 기존의 있던 숫자를 자리수를 올리고, 나중에 입력된 숫자를 더함
    // 기존에 저장된 숫자 : num1객체의 value
    // 방금 입력받은 숫자 : 인자값으로 value란 값으로 넘어온 상태
    //console.log(typeof(num1.value));
    display_number(result);
}

function display_number(value){
    let display = document.querySelector(".display");
    display.innerHTML = Number(value).toLocaleString("ko-KR");
}