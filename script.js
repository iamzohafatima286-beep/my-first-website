let count = localStorage.getItem("likes") || 0;
document.getElementById("count").innerText = count;

document.getElementById("likeBtn").addEventListener("click", function () {
  count++;
  localStorage.setItem("likes", count);
  document.getElementById("count").innerText = count;
});