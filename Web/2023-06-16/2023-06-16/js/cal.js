window.onload = function(){
    // 하나만 가져옴let btn_list = document.querySelector(".btn");
    let btn_list = document.querySelectorAll(".btn"); // 전체를 다가져옴
    //console.log(btn_list);
    btn_list.forEach(btn => {
        // 이벤트 리스너 추가 
        // 버튼이 마우스의 동작에 따라 색상이 달라짐 
        btn.onmouseover = function(){
            btn_over(btn);  //css hover대신 사용할 색만 바꿔주는 함수 호출
        }
        btn.onmousedown = function(){
            btn_down(btn);  //버튼이 눌렸을 때 실행할 함수를 호출
        }     
        btn.onmouseup = function(){
            btn_up(btn);    //버튼이 올라올 때 실행할 함수를 호출
        }
        btn.onmouseout = function(){
            btn_up(btn);    //버튼이 올라올 때 실행할 함수를 호출
        }
    });
    // btn_list.onmousedown = function(){
    //     btn.setAttribute("style","background-color: yellow");
    // }
}
function btn_down(btn){ // 버튼이 눌렸을 때
    btn.setAttribute("style","background-color: aliceblue");
    //console.log(btn.value);
    // 어느 버튼이 눌렸는지 판별할 함수를 호출
    check_btn(btn);
}
function btn_up(btn){   // 버튼이 올라올 때
    btn.setAttribute("style","background-color: silver");
}
function btn_over(btn){
    btn.setAttribute("style","background-color: aliceblue");
}

