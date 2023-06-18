function check_btn(btn){
    // 숫자 버튼이냐
    // console.log(isNaN(parseInt(btn.value)));
    if(isNaN(parseInt(btn.value))){
        // 연산자 버튼이냐
            // + - * / 구분
        // '=' 버튼이냐
        switch(btn.value){
            case "+": case "-": case "×": case "÷":
                // 연산자 버튼이 눌렸을 때 처리할 함수를 호출
                console.log("연산자버튼이 눌렸습니다.");
                op_btn(btn.value);
                break;
            case "=":
                // 계산을 실행할 함수를 호출
                // console.log("=이 눌렸습니다.");
                Do_btn();
                break;
            case "C":
                clear();
                break;
            case "D":
                delete_log();
                break;
            case "《":
                back_btn();
                break;
            case "+/-":
                pm_btn();
                break;
        }
        
    }else{
        // 숫자 버튼인경우
        console.log("숫자가 눌렸습니다." + btn.value);
        num_btn(btn.value);
    }
}
