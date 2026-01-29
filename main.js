// ===== 轮播图（稳定版）=====
window.addEventListener("load", () => {
  const images = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
  ];

  let index = 0;
  const img = document.getElementById("carousel-img");

  // 确保第一张一定显示
  img.src = images[0];

  setInterval(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
  }, 3000);
});


// 企业订阅弹窗
const subscribeBtn = document.querySelector(".subscribe-box button");
const subscribeModal = document.getElementById("subscribeModal");

subscribeBtn.addEventListener("click", () => {
  subscribeModal.style.display = "flex";
});

function closeSubscribe() {
  subscribeModal.style.display = "none";
}
