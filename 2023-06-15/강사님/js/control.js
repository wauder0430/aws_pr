// 계산기 버튼 종류에 따라 분기시키는 함수
function check_btn(btn){
	//	console.log(isNaN(parseInt(btn.value)));
	if(isNaN(parseInt(btn.value))){
		// 나머지 버튼
		// 연산자 버튼 + - * /
		switch (btn.value) {
			case "+": case "-": case "×": case "÷":
				// 연산자 버튼이 눌렸을때 처리할 함수를 호출
				console.log(btn.value + "연산자 버튼이 눌렸습니다");
				op_btn(btn.value);
				break;
		// '=' 버튼이냐
		case "=":
			// 계산을 실행할 함수 호출
			Do_btn();
			break;
		// 뒤로가기 버튼 : «
		// back_btn();
		// display 지우기 버튼 : C
		// clear();
		// log 지우기 버튼 : D
		// delete();
		// 양수 음수 전환 버튼 : +/-
		// pm_btn();
		// 소숫점 입력 버튼 : .
		// dot_btn();
		}
	}else{
		// 숫자버튼
		console.log("숫자 버튼이 눌렸습니다 : " + btn.value);
		num_btn(btn.value);
	}
}