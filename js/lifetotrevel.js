let clothing = 0, eating = 1, health = 2,
    communication = 3, rules = 4, life_main_img = 5, life_rules_img = 6;
let quelist = [ false, false, false, false, false,
    false, false, false, false, false]
let complate_chek = [false, false, false, false, false,
    false, false, false, false, false]

    let check_yes = [
    document.getElementById("yes_0_0"),
    document.getElementById("yes_0_1"),
    document.getElementById("yes_0_2"),
    document.getElementById("yes_0_3"),
    document.getElementById("yes_0_4"),
    document.getElementById("yes_0_5"),
    document.getElementById("yes_0_6"),
    document.getElementById("yes_0_7"),
    document.getElementById("yes_0_8"),
    document.getElementById("yes_0_9")
]
let check_no = [
    document.getElementById("no_0_0"),
    document.getElementById("no_0_1"),
    document.getElementById("no_0_2"),
    document.getElementById("no_0_3"),
    document.getElementById("no_0_4"),
    document.getElementById("no_0_5"),
    document.getElementById("no_0_6"),
    document.getElementById("no_0_7"),
    document.getElementById("no_0_8"),
    document.getElementById("no_0_9")
]
let life_item = [
    document.getElementById("clothing"),
    document.getElementById("eating"),
    document.getElementById("health"),
    document.getElementById("communication"),
    document.getElementById("rules"),
    document.getElementById("life_main_img"),
    document.getElementById("life_rules_img")
]
function init() {
    life_item[life_rules_img].style.display = "none";
    document.getElementById("checklist_compalate").style.display = "none";
}
init();
// 클릭이미지 변경
function flag_life_contents(num) {
    switch (num) {
        case 0:
            life_item[clothing].src = "images/last/web10_1_2.png";
            break;
        case 1:
            life_item[eating].src = "images/last/web10_2_2.png";
            break;
        case 2:
            life_item[health].src = "images/last/web10_3_2.png";
            break;
        case 3:
            life_item[communication].src = "images/last/web10_4_2.png";
            break;
        case 4:
            life_item[rules].src = "images/last/web10_5_2.png";
            page_change_flag_fun();
            break;
    }
}
function checklist_check(num, str, _color) {
    switch (num) {// check유무
        case 0:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 1:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 2:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 3:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 4:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 5:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 6:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 7:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 8:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 9:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;       
    }
    complate_check();
}
function complate_check(){ // 마지막 검사 확인 함수
    var result = 0;
    if(complate_chek[0] == true && complate_chek[1] == true && complate_chek[2] == true && complate_chek[3] == true && complate_chek[4] == true &&
        complate_chek[5] == true && complate_chek[6] == true && complate_chek[7] == true && complate_chek[8] == true && complate_chek[9] == true){
            for(i = 0; i< quelist.length; i++){
            if(quelist[i] == true){
                result++;
                if(result >= 6){
                    life_item[life_rules_img].style.display = "none";
                    document.getElementById("checklist_compalate").style.display = "block";
                    document.getElementById("com_txt_yes").style.display = "block";
                    document.getElementById("com_txt_no").style.display = "none";
                }
                else{
                    life_item[life_rules_img].style.display = "none";
                    document.getElementById("checklist_compalate").style.display = "block";
                    document.getElementById("com_txt_yes").style.display = "none";
                    document.getElementById("com_txt_no").style.display = "block";
                }
            }
        }
    }
}
function page_change_flag_fun() { //생활배움에서 버튼을 클릭 했을때
    setTimeout(() => {
        life_item[life_main_img].style.display = "none";
        life_item[life_rules_img].style.display = "block";
    }, 200);
}