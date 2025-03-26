window.addEventListener('DOMContentLoaded', function() {
    // 5개의 문구 요소를 배열로 가져옴
    const motto = [
        document.getElementById('motto1'),
        document.getElementById('motto2'),
        document.getElementById('motto3'),
        document.getElementById('motto4'),
        document.getElementById('motto5')
    ];
    
    // 변경할 배경 이미지 목록
    const images = [ 
        '신뢰혁신.jpg',
        '나눔혁신.jpg',
        '환경혁신.jpg',
        '미래혁신.jpg',
        '보안혁신.jpg'
    ];

    // 모든 문구 텍스트의 투명도를 0으로 설정 (숨김)
    function non() {
        const motto_text = document.querySelectorAll('.motto_text');
        motto_text.forEach((tex) => {
            tex.style.opacity = '0';
        });
    }

    // 모든 문구 텍스트의 투명도를 1로 설정 (표시)
    function yes() {
        const motto_text = document.querySelectorAll('.motto_text');
        motto_text.forEach((tex) => {
            tex.style.opacity = '1';
        });
    }
    
    // 페이지 로드 후 처음에는 텍스트가 보이도록 설정
    yes();

    // 마우스를 해당 요소 위에 올리면 해당 인덱스의 이미지로 변경하고 텍스트 숨김
    function mouente(index) {
        const image = images[index];
        motto.forEach(mott => {
            mott.style.backgroundImage = `url(images/motto/${image})`;
        });
        non();
    }
    
    // 마우스를 요소에서 떼면 원래 이미지로 복원하고 텍스트 표시
    function mounone() {
        motto.forEach((mott, i) => {
            mott.style.backgroundImage = `url(images/motto/${images[i]})`;
        });
        yes();
    }
    
    // 각 문구 요소에 마우스 이벤트 리스너 추가
    motto.forEach((mott, index) => {
        mott.addEventListener('mouseenter', () => mouente(index)); // 마우스를 올리면 변경
        mott.addEventListener('mouseleave', mounone); // 마우스를 떼면 복원
    });
});
