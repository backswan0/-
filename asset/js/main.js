/* 현재 날짜 출력 */
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("today_date").innerHTML = new Date().toLocaleDateString('ko-KR', options);
