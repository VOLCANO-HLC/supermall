
export default function animated(obj, target, callback) {
  // var div = document.querySelector('div')
  // var btn = document.querySelector('button')
  // btn.addEventListener('click', function () {
  //   var timer = setInterval(function () {
  //     div.style.left = div.offsetLeft + 5 + 'px';
  //     if (div.offsetLeft >= 500) {
  //       clearInterval(timer);
  //     }
  //   }, 30);
  // })
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    var speed = (target - obj.offsetLeft) / 10;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
    if (obj.offsetLeft == target) {
      // obj.style.left = obj.offsetLeft + speed + 'px';
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
    } else {
      obj.style.left = obj.offsetLeft + speed + 'px';
      // clearInterval(obj.timer);
    }

  }, 30);

}
