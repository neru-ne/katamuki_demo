/**
 *  @param alpha number | null
 *  @param beta number | null
 *  @param gamma number | null
 */
export  class MovePosition {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;

  //各img取得
  static layer_1 = document.getElementById('layer_1') as HTMLElement;
  static layer_2 = document.getElementById('layer_2') as HTMLElement;
  static layer_3 = document.getElementById('layer_3') as HTMLElement;
  static layer_4 = document.getElementById('layer_4') as HTMLElement;
  static layer_5 = document.getElementById('layer_5') as HTMLElement;
  static layer_6 = document.getElementById('layer_6') as HTMLElement;
  static layer_7 = document.getElementById('layer_7') as HTMLElement;

  constructor(alpha: number | null, beta: number | null, gamma: number | null) {
    this.alpha = alpha;
    this.beta = beta;
    this.gamma = gamma;
  }

  /**
   * イベント発生時の処理を記述
   */
  setImgPositon() {
    // console.log('alpha : ' + this.alpha);
    // console.log('beta : ' + this.beta);
    // console.log('gamma : ' + this.gamma);

    if (this.alpha === null || this.beta === null || this.gamma===null ){
      return;
    }

    let x = this.gamma; // -180 から 180 の範囲で角度を示す
    let y = this.beta; // -90 から 90 の範囲で角度を示す

    // 端末をひっくり返したくはないため、
    // x の値を -90 から 90 の範囲に制限する
    if (x > 90) {
      x = 90;
    }
    if (x < -90) {
      x = -90;
    }

    // 小数点第一位で丸める
    x =  Math.floor(x * Math.pow(10, 1)) / Math.pow(10, 1);
    y = Math.floor(y * Math.pow(10, 1)) / Math.pow(10, 1);

    this.setImages(y,x);
  }

  /**
   * 各画像の位置を調整
   * @param y
   * @param x
   */
  private setImages(y:number,x:number) {
    //yはそのままだと動きすぎるので調整
    y = y /4;

    const myPromise = new Promise(resolve => {
      MovePosition.layer_7.style.transform = `translate(${x}px, ${y /2}px)`;
      resolve("done");
    });

    myPromise
      .then(()=>{
        setTimeout(() => {
          MovePosition.layer_6.style.transform = `translate(${x / 2}px, ${y / 3}px)`;
        }, 200);
      }).then(() => {
        setTimeout(() => {
          MovePosition.layer_5.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
        }, 300);
      }).then(() => {
        setTimeout(() => {
          MovePosition.layer_4.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
        }, 400);
      }).then(() => {
        setTimeout(() => {
          MovePosition.layer_3.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
        }, 500);
      }).then(() => {
        setTimeout(() => {
          MovePosition.layer_2.style.transform = `translate(${x / 9}px, ${y / 9}px)`;
        }, 500);
      })



    const setYDom = document.getElementById('setY') as HTMLElement;
    setYDom.textContent = 'Y: '+y+'px';

    const setXDom = document.getElementById('setX') as HTMLElement;
    setXDom.textContent = 'X: '+x+'px';

  }
}
