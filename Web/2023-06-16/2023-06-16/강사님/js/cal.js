/* 페이지 로드 되었을때 실행할 내용 / 이벤트 리스너 작성 */

window.onload = function() {
// 제일 먼저 검색된 객체만 반환
//  let btn_list = document.querySelector(".btn");
	// 복수의 객체를 배열로 반환
	let btn_list = document.querySelectorAll(".btn");
//  console.log(btn_list);
	// 배열객체에서 각 원소별로 동작할 익명함수를 작성
	btn_list.forEach(btn => {
		// 이벤트 리스너
		// 마우스 버튼이 눌리면
		btn.onmousedown = function(){
			btn_down(btn);		// 버튼이 눌렸을때 실행할 함수를 호출
		}
		// 마우스 버튼이 올라오면
		btn.onmouseup = function() {
			btn_up(btn);			// 버튼이 올라올때 실행할 함수를 호출
		}
		// 마우스 커서가 객체의 영역을 벗어나면
		btn.onmouseout = function() {
			btn_up(btn);			// 버튼이 올라올때 실행할 함수를 호출
		}
		// 마우스 커서가 객체의 영역에 들어오면
		btn.onmouseover = function() {
			btn_over(btn);			// 버튼이 올라올때 실행할 함수를 호출
		}
	});
}
// 버튼이 눌렸을때 실행할 함수
function btn_down(btn){
	btn.setAttribute("style", "background-color:yellow;");
//	console.log(btn.value);
	// 어느 버튼이 눌렸는지 판별할 함수를 호출
	check_btn(btn);
}
// 버튼 위에 커서가 올라오면 실행할 함수
function btn_over(btn){
	btn.setAttribute("style", "background-color:white;");
}
// 버튼이 올라올때 실행할 함수
function btn_up(btn){
	btn.setAttribute("style", "background-color:silver;");
}