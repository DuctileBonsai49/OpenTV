
const videoList = document.getElementById("videoList");
const videos = JSON.parse(localStorage.getItem("videos") || "[]");
videos.forEach((url, i) => {
  const video = document.createElement("video");
  video.src = url;
  video.controls = true;
  video.style.marginBottom = "20px";
  videoList.appendChild(video);
});
