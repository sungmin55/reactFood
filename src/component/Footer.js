import '../styles/util.css'

function Footer() {
  return (
    <body>
      <footer>
        <div class="container footerPage">
          <ul class="row row-cols-auto terms ">
            <li class="col">데이터 제휴 문의</li>
            <li class="col">개인정보처리방침</li>
            <li class="col">이용약관</li>
            <li class="col">위치기반 서비스 이용약관</li>
          </ul>
          <ul class="row row-cols-auto info">
            <li class="col fw-bolder mainName">(주)식사 시간 </li>
            <li class="col">대표이사 : 멋쟁이</li>
            <li class="col">소재지 : 인천광역시 귀엽구 사랑스럽동</li>
            <li class="col">사업자등록번호 : 206-36-43579</li>
          </ul>
          <p>이메일 문의 : contact@sicksatime.com</p>
          <div class="row row-cols-auto d-flex justify-content-between detailInfo">
            <span class="">
              전화 문의 : 032-461-1304 (평일 : 10:00 ~ 19:00, 주말/공휴일 제외)
            </span>
            <span class="">Copyright ⓒ 2024 SicksaTime</span>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default Footer