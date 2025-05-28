
let mediaRecorder;
let recordedBlobs = [];

async function startRecording() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  document.getElementById("videoPreview").srcObject = stream;
  recordedBlobs = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => recordedBlobs.push(e.data);
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedBlobs, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const videos = JSON.parse(localStorage.getItem("videos") || "[]");
    videos.push(url);
    localStorage.setItem("videos", JSON.stringify(videos));
    alert("Video gespeichert!");
  };
  mediaRecorder.start();
}

function stopRecording() {
  mediaRecorder.stop();
}
