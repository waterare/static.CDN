var OriginTitle = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '网页保留中...';
    }else {
        document.title = '为你开启阅读';
        setTimeout(function () {
            if(!document.hidden){
                document.title = OriginTitle;
            }
        }, 2000);
    }
});