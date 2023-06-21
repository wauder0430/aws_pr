function add_log(result) {
	let log_box = document.querySelector(".log_box");
	console.log(log_box);
	let x = Number(num1.value).toLocaleString("ko-KR");
	let y = Number(num2.value).toLocaleString("ko-KR");
	let z = Number(result).toLocaleString("ko-KR");
	log_box.innerHTML += `<div class="log_list">${x} ${op.value} ${y} = ${z} </div>`;
}
// 계산식 표시 영역과 숫자 표시 영역을 초기화
function reset_display() {
	document.querySelector(".calculate_msg").innerHTML = "";
	document.querySelector(".display").innerHTML = "";
}

// "C"버튼을 누르거나, 계산기 초기화에 사용
function clear() {
	// num1, op, num2를 초기화
	num1.value = "";
	op.value	 = "";
	num2.value = "";
	// calculate_msg, display 초기화
	reset_display();
}

// 로그영역을 삭제하는 함수
function delete_log(params) {
	document.querySelector(".log_box").innerHTML = '<div class="log_list">아직 기록이 없습니다.</div>';
	
}

// op가 저장되어있는지 체크
function check_op() {
	if( op.value == "" ) { return false; }
	return true;
}

// 숫자를 저장할 함수 ( 대상, 값 )
function save_num(target, value){
	let result = 0;
	if(target == "num1"){
		// num1에 저장
		// num1에 저장된 숫자가 음수면
		if( Math.sign(Number(num1.value)) == -1 ) {
			result = num1.value*10 - Number(value);
		}else{
			result = num1.value*10 + Number(value);
		}
		num1.value = result;
	}else if(target == "num2"){
		// num2에 저장
		if( Math.sign(Number(num2.value)) == -1 ) {
			value *= -1; 
		}
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
	let result = Number(value).toLocaleString("ko-KR");
	// Locale 변환값이 0이면 화면에 0을 표시하는 대신에 빈칸을 보낸다
	if(result == 0){ result = ""; }
	display.innerHTML = result;
}

// calculate_msg 영역에 num1과 op를 합쳐 출력하는 함수
function display_calculate(value)
{
	if(value == null) { value = ""; }
	let msg = document.querySelector(".display").innerHTML + value;
	document.querySelector(".calculate_msg").innerHTML = msg;
}

function chng_pm(value) {
	let result = value;
	// value가 음수인지 양수인지 판별 Math.sign(숫자) -> 음수면 -1
	if( Math.sign(value) == -1 ) {
		// 1. 음수 -> 절대값을 구하는 Math.abs(숫자)
		result = Math.abs(value);
	}else{
		// 2. 양수 -> -1을 곱
//		result = value * -1;
		result *= -1;
	}
	return result;
}