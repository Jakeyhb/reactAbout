// # 目标: 布局搞定 ; 布局需要复用的;
// 图片 403 报错是因为 服务器端检测到你拿人家图片做一些奇怪的事情。
// 我们解决403报错，在html的head里面加上一个meta标签 : 
// <meta name="referrer" content="no-referrer">


// 1.  加载数据; 
// 2.  根据结构渲染页面;

// 优化 : 小任务;
// 1. def.done 处理函数优化(整合统一)
// 2. scroll 事件执行频率过高,可以进行节流 * 或者去抖行为处理;

import $ from "jquery";
export default waterfall = function () {

  function init() {
    var def = load();
    // 容器高度;
    var container_height = null;
    // 可视区高度;
    var ch = document.documentElement.clientHeight;
    // 是否在加载中;
    var loading = false;

    def.done(function (res) {
      render(res.data);
      // sort 里面的数据在 ifLoad 里面需要使用;
      container_height = sort();
      //判断是佛加载
      hasMore = res.paging.hasMore;

    })
    def.fail(function (res) {
      console.log("抱歉请求失败", res);
    })

    $(document).scroll(function () {
      // 判定是否在加载过程之中，如果是那么没必要继续判定等行为;
      if (loading || hasMore) return false;
      // 高频执行，函数节流去抖;
      // scrollTop    ;   多次获取
      // clientHeight ;   只获取一次即可;
      var res = ifLoad(container_height, ch);
      // 加载是非常消耗性能的行为; => 加载请求少发送;
      // 如果已经在加载状态了，我们不重复发送请求;
      if (res) {
        loading = true;
        // 传入下一次开始加载的起始点;
        def = load();
        def.done(function (res) {
          render(res.data);
          container_height = sort();
          // 及时更改加载状态;
          loading = false;

        })
        def.fail(function (res) {
          console.log("抱歉请求失败", res);
        })
      }
    })
  }
  // 判定加载功能是否好用;
  function ifLoad(height, ch) {
    // 如果数据加载还未成功，或者高度为0，那么没必要执行渲染功能;
    if (!height) return false;
    // 获取scrollTop;
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    if (st + ch >= height) {
      return true;
    }
    return false;
  }
  // 就是加载数据的 , 加载数据的结果进行返回;
  function load(page) {
    page = page || 1;
    // 因为数据是跨域的; => 服务器代理跨域;

    // https://show.maoyan.com/maoyansh/myshow/ajax/performances/0;st=4;p=2;s=10;tft=0
    var options = {
      url: `http://localhost/maoyanyclist/0;st=4;s=10;tft=0;p=${page}`,
      data: {
        sellChannel: 13,
        cityId: 1,
        lng: 0,
        lat: 0,
        token: "9HzRzXcCujw-AvZdMsRlXo5RRwwAAAAArQoAAOTJSYxYv5OK9d9tivaawQd8rVMpaFjditnqkply23V7l26KL2xRUIjVPAk_GmNWfQ"
      }
    };
    // $.ajax() => def 
    return $.ajax(options);
  }
  // 页面渲染;
  function render(list) {
    // 图片的等比例缩放;
    // 原图片的宽为   : 100,
    // 原图片的高度为 : 100

    // 缩放 ： 
    // 缩放之后的图片 : 宽度 20;
    //                 高度 : 原图片的高度为 * (缩放之后的图片宽度 / 原图片的宽度) 

    // 已知三个数，求一个数;
    // sw 缩放后的宽度;
    // yw 原图宽度;
    // sw / yw = sh / yh
    // sh = yh * ( sw / yw );

    var html = "";
    list.forEach(function (item) {
      html += `<div class="box">
                      <div class="image-wrapper">
                          <img height=${ item.photo.height * (235 / item.photo.width)} src="${item.photo.path}" alt="">
                      </div>
                      <p class="title-wraper">
                          ${item.msg}
                      </p>
                  </div>`;
    });
    $(".waterfall-container").append(html);
  }

  function sort() {
    var $box = $(".box");
    var height_array = [];
    // 1. 创建基本高度;
    for (var i = 0; i < 4; i++) {
      // 前四个元素的高度放入数组之中;
      height_array.push($box.eq(i).height() + $box.eq(i).position().top);
    }
    // 因为图片的加载是需要时间的,所以默认获取图片的时候会导致图片的高度为0;
    // 要在图片渲染的时候直接设置图片的高度，从而准确获取图片高度;

    // 2. 将图片变成绝对定位,定位在最矮的那一列之中;
    for (var i = 4; i < $box.length; i++) {
      var min = Math.min.apply(false, height_array);
      var min_index = height_array.indexOf(min);
      $box.eq(i).css({
        left: min_index * 255,
        top: min + 40,
        position: "absolute"
      });
      // 3. 更改高度数组; => 告诉数组之中的最小值;
      height_array[min_index] += $box.eq(i).height() + 40;
    }

    return min;
  }
  init();
}
