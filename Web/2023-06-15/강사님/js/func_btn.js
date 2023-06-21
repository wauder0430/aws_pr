// 연산자 버튼이 눌렸을때 실행
function op_btn(value){
	// 1. 저장된 연산자가 없으면 저장
	// 2. 저장된 연산자가 있고
	//		-> num2가 없으면 기존 연산자를 갱신
	//		-> num2가 있으면 무시 
	op.value = value;
}

// 계산 버튼이 눌렸을때 실행
function Do_btn(){

}

// op가 저장되어있는지 체크
function check_op() {
	if( op.value == "" ) { return false; }
	return true;
}

// 숫자 버튼이 눌렸을때 실행
function num_btn(value){
	// 연산자 버튼이 눌렸는지 확인을 하고
	// 1. 안눌렸으면 num1에 숫자를 저장
	// 2. 눌렸으면 num2에 숫자를 저장
	if(check_op() != true) {
		// 연산자 입력 전 : num1에 저장
		save_num("num1",value);
	}else{
		// 연산자 입력 후 : num2에 저장
		save_num("num2",value);
	}
}

// 숫자를 저장할 함수 ( 대상, 값 )
function save_num(target, value){
	let result = 0;
	if(target == "num1"){
		// num1에 저장
		result = num1.value*10 + Number(value);
		num1.value = result;
	}else{
		// num2에 저장
		result = num2.value*10 + Number(value);
		num2.value = result;
	}
	// // 기존에 있던 숫자를 자리수를 올리고, 나중에 입력된 숫자를 더함
	// // 기존에 저장된 숫자 : num1객체의 value
	// // 방금 입력받은 숫자 : 인자값으로 value
	// num1.value = num1.value*10 + Number(value);

	display_number(result);	
}

// 입력된 숫자를 display 영역에 로케일 변환 후 표시
function display_number(value)
{
	let display = document.querySelector(".display");
	display.innerHTML = Number(value).toLocaleString("ko-KR");
}