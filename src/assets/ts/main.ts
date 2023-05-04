import '../sass/style.scss';

import { MovePosition } from "./utils/MovePosition.ts";

// 加速度センサーイベント処理
window.addEventListener("deviceorientation", function (e) {
  // alpha, beta, gammaの値を取得
  let alpha = e.alpha;
  let beta = e.beta;
  let gamma = e.gamma;

  //傾き
  const movePosition = new MovePosition(alpha, beta, gamma);
  movePosition.setImgPositon();

}, false);
