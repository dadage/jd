function resize() {
    var designWidth=750;
    var designFontsize=200;
    var newWidth=document.documentElement.offsetWidth;
    var newFontsize=newWidth*(designFontsize/designWidth);
    document.documentElement.style.fontSize=newFontsize+"px";
}
window.addEventListener('resize',resize);
resize();