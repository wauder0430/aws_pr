function add_log(result) {
    let log_box = document.querySelector(".log_box");
    console
    log_box.innerHTML += `<div class="log_list">${num1.value} ${op.value} ${num2.value} = ${result} </div>`;
    console.log("아니");

    return;
}

function reset_display(){
    document.querySelector(".calculate_msg").innerHTML = "";
    document.querySelector(".display").innerHTML = "";
}

// C버튼 혹은 계산 후 초기화
function clear(){
    num1.value = "";
    op.value = "";
    num2.value = "";
    reset_display();
}

// D버튼 로그 화면 초기화
function delete_log() {
    document.querySelector(".log_box").innerHTML = `<div class="log_list">아직기록이없음</div>`;
}

function display_calculate(value){
    if(value == null) { value == "";}
    let msg = document.querySelector(".display").innerHTML + value;
    document.querySelector(".calculate_msg").innerHTML = msg;
}