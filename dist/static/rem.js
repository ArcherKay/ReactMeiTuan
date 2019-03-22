(function () {
    var docEl = document.documentElement;

    function setRemUnit() {
        var rem = docEl.clientWidth / 10;
        docEl.style.fontSize = rem + 'px';
    }
    setRemUnit();
    //   当调整浏览器窗口的大小时，发生 resize 事件
    window.addEventListener('resize', setRemUnit);
})();