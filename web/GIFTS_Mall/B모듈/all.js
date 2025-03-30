document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    let isAutoplay = false;

    function playVideo() { 
        video.play().catch(error => console.log("재생 오류:", error)); 
    }
    function pauseVideo() { video.pause(); }
    function stopVideo() { 
        video.pause(); 
        video.currentTime = 0; 
    }
    function rewindVideo() { video.currentTime -= 10; }
    function fastForwardVideo() { video.currentTime += 10; }
    function slowDownVideo() { video.playbackRate = Math.max(0.1, video.playbackRate - 0.1); }
    function speedUpVideo() { video.playbackRate += 0.1; }
    function resetSpeed() { video.playbackRate = 1; }
    function toggleLoop() { video.loop = !video.loop; }
    function toggleAutoplay() { 
        isAutoplay = !isAutoplay; 
        video.autoplay = isAutoplay; 
    }
    function toggleControls() { 
        const controls = document.querySelector('.controls');
        const toggleButton = document.querySelector('.toggle-btn');
    
        if (controls.style.display === 'none') {
            controls.style.display = 'flex';  // 컨트롤러 보이기
        } else {
            controls.style.display = 'none';  // 컨트롤러 숨기기
        }
    }
    
    

    // 전역 함수로 설정 (HTML 버튼이 접근 가능하도록)
    window.playVideo = playVideo;
    window.pauseVideo = pauseVideo;
    window.stopVideo = stopVideo;
    window.rewindVideo = rewindVideo;
    window.fastForwardVideo = fastForwardVideo;
    window.slowDownVideo = slowDownVideo;
    window.speedUpVideo = speedUpVideo;
    window.resetSpeed = resetSpeed;
    window.toggleLoop = toggleLoop;
    window.toggleAutoplay = toggleAutoplay;
    window.toggleControls = toggleControls;
});
