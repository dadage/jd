window.addEventListener('load', function () {
    // 获取轮播区域的高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
    var header = document.querySelector('#header');
    // 顶部搜索框颜色的渐变效果
    function setcolor() {
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var opacity = scrollTop / slideHeight;
        header.style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
    }
    setcolor();
    window.addEventListener('scroll', setcolor);


    // 实现轮播效果
    // 初始化swiper插件
    new Swiper('.swiper-container', {
        // 实现循环轮播
        loop: true,
        // 添加分页器
        pagination: {
            el: 'swiper-pagination'
        },
        // 使用前进后退按钮
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        }


    })

    // 实现定时效果
    var time=7200;
    // 获取时间元素
    var spans=document.querySelectorAll('.seckill-time span:not(:nth-child(3n))');
    setDowntime();
    var timeID=setInterval(function(){
        time--;
        // 获取小时参数
        setDowntime();
    },1000);
    // 计算时间函数
    function setDowntime(){
        var hours=Math.floor(time/3600);
        var minute=Math.floor(time%3600/60);
        var second=Math.floor(time%60);
        spans[0].innerHTML=Math.floor(hours/10);
        spans[1].innerHTML=Math.floor(hours%10);
        spans[2].innerHTML=Math.floor(minute/10);
        spans[3].innerHTML=Math.floor(minute%10);
        spans[4].innerHTML=Math.floor(second/10);
        spans[5].innerHTML=Math.floor(second%10);
    }

})