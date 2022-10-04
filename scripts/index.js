/* 
일단 뭘 해야되는지를 생각을 해야 짜든지 말든지 할 수가 있다. 니가 나중에 해야될 프로젝트도 마찬가지고, 니가 그 구상을 할 때는 손으로 써라. 메모장으로 하셔도 되는데 그냥 손으로 써라.
그러면 여기서는 뭘 해야될까?

일단 입력부터.
1. 폭탄섞기 버튼.
2. 숫자를 클릭.

처리.
1-1. shuffle.
-폭탄 위치를 배열로 처리.
2-1. 숫자를 클릭하면
- shuffle 확인.
- 그 후 그림 표시.
- 폭탄위치 배열의 숫자값으로 그림 구분.
- 클릭된 번호를 배열에 저장.
-하트 그림이 나오면 카운트 증가.
카운트 값이 8이면 폭탄위에 하트를 넣고 종료.
-폭탄 그림이 나오면 다시 눌러지지 않도록.
 */

//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 메시지 출력 함수
const msgShow = (m) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = `<h2>${m}</h2>`;
}

// 숫자박스를 클릭한 경우: 기존 버전
/* function show(n) {
  console.log(n)
} */

// 숫자박스를 클릭한 경우: 화살표 함수
const show = (n) => {
  if (!shuffleFlag) {
    msgShow("폭탄을 섞어 주세요.")
    return;
  } 
  // 누른 번호를 배열에 추가
  if ( !selNum.includes(n))   selNum.push(n);
  cnt++;
  console.log(selNum, cnt, selNum.length);
  // 폭탄이 있는 배열을 참조하여 그림 변경
  let imgSrc = "hart";
  if (num[n-1] == 1) imgSrc = "boom";
  else imgSrc = "hart";

  // 클릭한 숫자 박스에 그림 표시
  document.getElementById(`box${n}`).innerHTML = `"<img src =./images/${imgSrc}.png>"`
    // console.log(n);

    // 성공체크
  if (selNum.length == 8) {
    let fn = [1,2,3,4,5,6,7,8,9].filter((i) => !selNum.includes(i))
    document.getElementById(`box${fn[0]}`).innerHTML = `<img src=./images/hart.png>`
    msgShow('Success');

  }
    // 실패체크
      if (imgSrc == 'boom') {
        shuffleFlag = false;
        msgShow("Fail")
        document.getElementById(`box${n}`).innerHTML = '`<img src=./images/boom.png>`'
      }
}

// 폭탄섞기
const boxShuffle = () => {
  num.sort(() => Math.random() - 0.5);
  shuffleFlag = true;
  // 초기화함수 호출
  init();
  console.log(num)

}

// 초기화 함수
const init = () => {
  // 메시지 지우기
  msgShow('');
  // 그림 지우기
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`box${i}`).innerHTML = ''
  }
  // 초기화
  selNum = [];

}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
for (i = 0; i < 8; i++) {
  num.push(0);
}
num.push(1)
console.log(num)
});


