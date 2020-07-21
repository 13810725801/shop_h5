function $id () {
  return document.getElementById(id);
}

function bindEvent () {
  var sea = $id("my_search");
  /*banner对象*/
  var banner = $id("my_banner");
  /*高度*/
  var height = banner.offsetHeight;
  window.onscroll = function () {
    var top = document.body.scrollTop;
    /*当滚动高度大于banner的高度时颜色不变*/
    if(top > height){
      sea.style.background = "rgba(201,21,35,0.85)";
    } else {
      var op = top / height * 0.85
      sea.style.background = "rgba(201,21,35," + op + ")";
    }
  };
}

function scrollPic () {
  var imgBox = document.getElementsByClassName("banner_box")[0];
  var width = $id("my_banner").offsetWidth;
  var pointBox = document.getElementsByClassName("point_box")[0];
  var ols = pointBox.children;
  var indexx = 1;
  var timer = null;
  var moveX = 0;
  var endX = 0;
  var startX = 0;
  var square =0;

  function addTransition () {
    imgBox.style.transition = "all .3s ease 0s";
    imgBox.style.webkitTransition = "all .3s ease 0s";
  }

  function removeTransition () {
    imgBox.style.transition = "none";
    imgBox.style.webkitTransition = "none";
  }

  function setTransfrom (t) {
    imgBox.style.transform = 'translateX(' + t + 'px)';
    imgBox.style.webkitTransition = 'translateX(' + t + 'px)';
  }

  //开始动画部分
  pointBox.children[0].className = "now";
  for(var i = 0; i < ols.length; i++){
    ols[i].index = i;
    ols[i].onmouseover = function () {
      //所有的都要清空
      for(var j = 0; j < ols.length; j++){
        ols[j].className = "";
      }
      this.className = "now";
      setTransfrom(-indexx * width);
      square = indexx;
    }
  }
  timer = setInterval(function () {
    indexx++;
    addTransition();
    setTransfrom(-indexx * width);
    // 小方块
    square++;
    if(square > ols.length -1){
      square = 0;
    }
    // 先清楚所有的
    for(var i = 0; i < ols.length; i++){
      ols[i].className = "";
    }
    // 留下当前的
    ols[square].className = "now";
  }, 3000);

  imgBox.addEventListener('transitionEnd', function () {
    if(indexx >= 9){
      indexx = 1;
    }else if (indexx <= 0){
      indexx = 8;
    }
    removeTransition();
    setTransfrom(-indexx * width);
  }, false);

  imgBox.addEventListener('webkitTransitionEnd', function () {
    if(indexx >= 9){
      indexx = 1;
    }else if(indexx <= 0){
      indexx = 8;
    }

    removeTransition();
    setTransfrom(-indexx * width);
  }, false);

  /**
   * 触摸事件开始
   */
  imgBox.addEventListener("touchstart", function (e){
    console.log("开始");
    var event = e || window.event;
    //记录开始滑动的位置
    startX = event.touches[0].clientX;
  }, false);

  /**
   * 触摸滑动事件
   */
  imBox.addEventListener("touchmove", function (e){
    console.log("remove");
    var event = e || window.event;
    event.preventDefault();

    //清除定时器
    clearInterval(timer);
    //记录结束位置
    endX = event.touches[0].clientX;
    //记录移动的位置
    moveX = startX - endX;
    removeTransition();
    setTransfrom(-indexx * width - moveX);
  }, false);

  /**
   * 触摸结束事件
   */
  imgBox.addEventListener("touchend", function (e) {
    console.log("end");
    //如果移动的位置大于三分之一，并且是移动过的
    if (Math.abs(moveX) > (1 / 2 * width) && endX != 0) {
      // 向左
      if (moveX > 0) {
        indexx++;
      } else {
        indexx--;
      }
      //改变位置
      setTransfrom(-indexx * width);
    }
    //回到原来的位置
    addTransition();
    setTransfrom(-indexx * width);
    // 初始化
    startX = 0;
    endX = 0;

    clearInterval(timer);
    timer = setInterval(function () {
      indexx++;
      square++;
      if (square > ols.length - 1) {
        square = 0;
      }
      // 先清楚所有的
      for (var i = 0; i < ols.length; i++) {
        ols[i].className = "";
      }
      //留下当前的
      ols[square].className = "now";
      addTransition();
      setTransfrom(-indexx * width);

      //每3秒钟轮播图变化一次
    }, 3000);
  }, false);

  module.exports = {
    bindEvent,
    scrollPic
  }
}