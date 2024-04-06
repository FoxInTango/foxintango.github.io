const recordBtn = document.querySelector(".record-btn");
const player = document.querySelector(".audio-player");

// 实时监听 https://cloud.tencent.com/developer/article/1006406
//  关于webAudio也可以通过W3C提供的一个新的音频处理接口MediaRecorder Api进行录音，具体使用参考https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API

if (navigator.mediaDevices.getUserMedia) {
    var chunks = [];
    //var audioContext;
    const constraints = { audio: true };

    navigator.mediaDevices.getUserMedia(constraints).then(
        stream => {
            console.log("授权成功！");
            context = new window.AudioContext();
            context.bufferSize = 1024;

            //录音的同时在耳机播放
            var source = context.createMediaStreamSource(stream);
            
            const gain = context.createGain(); // 创建一个增益节点
            gain.gain.value = 3; // 将增益设置为0（相当于音量设置为0）
            /*
            // 创建二阶滤波器
            var biquadFilter = context.createBiquadFilter();
            biquadFilter.type = "lowshelf";
            biquadFilter.frequency.value = 1000;
            
            
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'square';
            oscillator.frequency.value = 440; // 不能直接给frequency负值，可以设置其value
            oscillator.frequency.exponentialRampToValueAtTime(440, 1) // 也可以通过它提供的方法来设置
            
            */
            //oscillator.connect(audioContext.destination);
            source.connect(gain);
            gain.connect(context.destination);
            //biquadFilter.connect(audioContext.destination);

            //oscillator.start();
            console.log(context);
            console.log(source);
            console.log(context.destination);
        })
} else {
  console.error("浏览器不支持 getUserMedia");
}