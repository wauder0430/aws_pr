// 연산자 버튼이 눌렸을때 실행
function op_btn(value){
	// 1. 저장된 연산자가 없으면 저장
	// 2. 저장된 연산자가 있고
	//		-> num2가 없으면 기존 연산자를 갱신 / num2가 있으면 무시 
	// console.log("num1 type : " + typeof(num1.value));
	//	console.log("num1 : " + (num1.value == ""));
	if( num1.value == "" || num2.value != "" ) { //		console.log("입력을 무시합니다");
		return;
	}
	op.value = value;
	//num1의 값 -> locale 변환후 op의 값과 합쳐서 calculate_msg에 표시
	// display 영역의 값 + op.value
	// let msg = document.querySelector(".display").innerHTML + value;
	// document.querySelector(".calculate_msg").innerHTML = msg;
	display_calculate(value);
}

// 계산 버튼이 눌렸을때 실행
function Do_btn(){
	// num1.value == "", op.value == "" , num2.value == "" -> 아무것도 안함
	if( num1.value == "" || op.value == "" || num2.value == "" ){
		alert("숫자나 연산자가 입력되지 않았습니다");
		return;
	}
	// 저장된 연산자 값에 따라 계산을 수행
	let result = 0;
	switch(op.value){
		case "+" :
			result = Number(num1.value) + Number(num2.value);
			break;
		case "-" :
			result = Number(num1.value) - Number(num2.value);
			break;
		case "×" :
			result = Number(num1.value) * Number(num2.value);
			break;
		case "÷" :
			result = Number(num1.value) / Number(num2.value);
			break;
	}
	// 로그 영역에, 결과를 표시
	add_log(result);
	// num1, op, num2를 초기화
	// calculate_msg, display 초기화
	clear();
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

// 뒤로 가기 버튼
function back_btn() {
	let result = 0;
	// 연산자가 입력되지 않았으면 -> num1을 처리
	if( check_op() != true ){
		result = Math.floor( Number(num1.value)/10 );
//		console.log(result);
		num1.value = result;
		display_number(result);
		display_calculate("");
	}else if(num2.value == "" || num2.value == "0"){
		// 연산자가 입력되어있으면
		// 1. num2가 입력되어있지 않으면 -> 연산자 삭제
		op.value = "";
		display_calculate("");
		display_number(num1.value);
		return;
		//		display_calculate(op.value);
		
	}else{
		// 2. num2가 입력되어있으면 num2를 처리
		result = Math.floor( Number(num2.value)/10 );
		// 숫자의 자릿수를 하나씩 줄여서 0이되면, num2를 빈칸으로 치환
		if(result == 0){ result = "";}
		num2.value = result;
		display_number(result);
		return;
	}
	return;
	
	// num1, num2에 음수가 적용이 되어있으면 처리 방법이 바뀜
	
}

function pm_btn() {
	// 연산자가 입력되어있지 않으면 num1을 처리
	// 입력되어있으면 num2를 처리
	let result = 0;
	if(check_op() != true){
		// num1를 받아서 음수 양수를 변환하는 함수를 호출
		result = chng_pm(Number(num1.value));
		num1.value = result;
	}else{
		// num2를 받아서 음수 양수를 변환하는 함수를 호출
		result = chng_pm(Number(num2.value));
		num2.value = result;
	}
	// display 영역을 갱신
	display_number(result);
}