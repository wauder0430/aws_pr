function op_btn(value){
    // 연산자 버튼이 눌렸을 때 실행할 내용
    
    // 2. 저장된 연산자가 있고
        // ->num2가 없으면 기존 연산자를 갱신
        // ->num2가 있으면 무시
    // console.log("num1 :" + num1.value + typeof(num1.value));  num1을 확인
    // num1이 비어있거나 num2가 있으면 무시
    if(num1.value == "" || num2.value != ""){     
        return;
    }
    op.value = value;
    // num1의 값 -> locale 변환 후 op의 값과 합쳐서 calculate_msg에 표시 
    // display 영역의 값 + op.value
    
    display_calculate(value); 
}

// 계산 버튼이 눌렸을 때 실행할 내용
function Do_btn(){
    // num1.value == "" || op.value =="" || num2.value ==""
    // 라면 무시해야함 
    if(num1.value == "" || op.value == "" || num2.value == ""){
        return;
    }
    let result = 0;
    switch(op.value){
        case '+': 
            result = Number(num1.value) + Number(num2.value);
            break;
        case '-':
            result = Number(num1.value) - Number(num2.value);
            break;
        case '×':
            result = Number(num1.value) * Number(num2.value);
            break;
        case '÷':
            result = Number(num1.value) / Number(num2.value);
            break;       
    }
    // log 영역에 결과를 표시
    document.querySelector(".calculate_msg").innerHTML = result;
    add_log(result);
    // num1, op , num2를 초기화
    // num1.value = "";
    // op.value = "";
    // num2.value = "";
    clear();
    // reset_display();
}

function num_btn(value){
    // 연산자 버튼이 눌렸는지 확인을 하고
    // 1. 안눌렸으면 num1에 숫자를 저장
    // 2. 눌렸으면 num2에 숫자를 저장
    if(check_op() != true) {
        // 연산자 입력 전 : num1에 저장
        // 만약 전 계산에서 입력된 값이 남아있다면 지워주기 위함
        document.querySelector(".calculate_msg").innerHTML="";
        save_num("num1",value);
    } else {
        // 연산자 입력 후 : num2에 저장
        save_num("num2",value);
    }
}

function check_op(){    // 입력된 연산자가 있는지 확인
    if(op.value == ""){ return false; }
    return true;
}

function save_num(target, value){   // 숫자를 저장할 함수 (대상 , 값)
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

// 입력받은 숫자영역의 숫자를 display 영역에 로케일 변환 후 표시 , , ,
function display_number(value){
    let display = document.querySelector(".display");
    display.innerHTML = Number(value).toLocaleString("ko-KR");
}

function back_btn() {
    let result = 0;
    // 연산자가 입력되지 않았으면 -> num 1처리
    if(check_op() != true && num1.value != 0){
        result = Math.floor(Number(num1.value)/10);
        num1.value = result;
        console.log(result);
        display_number(result);
        return;
    } else if(num2.value == ""){
        op.value = "";
        console.log(op.value);
        display_calculate("");
        return;
    } else{
        result = Math.floor(Number(num2.value)/10);
        if(result==0){
            display_number(num1.value);
            result = ""; 
            op.value = "";   
            num2.value = result;
            display_calculate("");
            return;        
        }
        num2.value = result;
        display_number(result);
    }
    // 연산자가 입력되어 있으면 -> 
        // 1.num2가 입력되지 않았으면 -> 연산자 삭제후 num1로 활성화
        // 2.num2가 입력되어 있으면 -> num2를 처리
    // num1, num2 에 음수가 적용이 되어있으면 처리 방법이 바뀜
    
}

function pm_btn() {
    // op.value 체크
    // 연산자가 입력되어 있지 않으면
    // num1을 처리
    // 입력되어 있으면 num2를 처리
    let result=0;
    if (check_op() != true){
        // num1
        result = chnge_pm(Number(num1.value));
        num1.value = result;
        // 숫자를 받아서 음수 양수를 변환하는 함수를 호출
    } else {
        // num2
        result = chnge_pm(Number(num2.value));
        num2.value = result;
        // 숫자를 받아서 음수 양수를 변환하는 함수를 호출
    }
}

function chage_pm(value){
    let result = value;
    // value가 음수인지 양수인지 판별
    // Math.sign(숫자);
    // 1. 음수 -> 절대값을 구하는 Math.abs(숫자);
    if(Math.sign(value) == -1){
        result = Math.abs(value);
    } else {
        result *= -1;
    }

    return result;
    // 2. 양수 -> *-1을 곱
}