const recordBtn = document.querySelector(".record-btn");
const player = document.querySelector(".audio-player");

// 实时监听 https://cloud.tencent.com/developer/article/1006406
//  关于webAudio也可以通过W3C提供的一个新的音频处理接口MediaRecorder Api进行录音，具体使用参考https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API

if (navigator.mediaDevices.getUserMedia) {
    var chunks = [];
    var audioContext;
    const constraints = { audio: true };

    navigator.mediaDevices.getUserMedia(constraints).then(
        stream => {
            console.log("授权成功！");
            audioContext = new AudioContext();
            

            //录音的同时在耳机播放
            var source = audioContext.createMediaStreamSource(stream);

            console.log(source);
            const gain = audioContext.createGain(); // 创建一个增益节点
            
            
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'square';
            oscillator.frequency.value = 440; // 不能直接给frequency负值，可以设置其value
            // oscillator.frequency.exponentialRampToValueAtTime(440, 1) // 也可以通过它提供的方法来设置
            
            

            gain.gain.value = 0.1; // 将增益设置为0（相当于音量设置为0）

            //oscillator.connect(gain);
            source.connect(gain);
            gain.connect(audioContext.destination);

            oscillator.start();
        })
} else {
  console.error("浏览器不支持 getUserMedia");
}