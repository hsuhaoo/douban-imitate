
<template>
    <div id="TalionNav">
        <header class="TalionNav feedly">
            <div class="TalionNav-primary-wrap">
                <div class="TalionNav-primary"><a href="/home_guide" class="logo">
                        <h1 style="font-size: 0px;">豆瓣</h1>
                    </a>
                    <form action="/search" class="search-box on-search" method="GET"><input class="search-input"
                            name="query" type="search" placeholder="搜索"></form><a class="nav-btns cancel">取消</a>
                </div>
                <div class="TalionNav-static">
                    <a href="/home_guide" class="icon-wrap">
                        <img
                            src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png"
                            class="icon" alt="douban icon">
                    </a>
                    <a class="info" href="/home_guide">
                        <h2>豆瓣<span>App</span></h2>
                        <p>记录你的书影音生活</p>
                    </a>
                    <a
                        href="https://www.douban.com/doubanapp/card/get_app?copy_open=1&amp;from=mdouban&amp;client_uri=douban%3A%2F%2Fdouban.com%2Fsubject%23book&amp;model=B&amp;copy=1&amp;page=&amp;channel=m_ad_nav"
                        class="btn green">打开App
                    </a>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default{
    name:"Nav",
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.TalionNav .logo {
    display: inline-block;
    font-size: 0;
    height: 26px;
    width: 54px;
    flex: 54px 0 0;
    background: url(data:image/png;base64,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) 50% no-repeat;
    background-size: contain;
}

.TalionNav .logo {
    margin-right: 15px;
}
.TalionNav a {
    text-decoration: none;
}
a {
    color: #42bd56;
    text-decoration: none;
}
.TalionNav-primary .search-box .on-search {
    max-width: 230px;
    flex: 230px 0 0;
    animation: open ease-in 0.3s;
}
.TalionNav-primary .search-box {
    /* width: 100px; */
    /* flex: 100px 0 0; */
    height: 30px;
    border-radius: 15px;
    border: 1px solid #dfdfdf;
    color: rgba(0,0,0,0.25);
    background-color: #f7f7f7;
    font-size: 15px;
    line-height: 21px;
    padding-left: 8px;
}
.TalionNav-primary, .TalionNav-primary .search-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
}
.TalionNav-primary {
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 0 15px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}
.TalionNav-static {
    left: 0;
    width: 100%;
    background-color: #f7f7f7;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
    padding: 0 18px;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.TalionNav .icon-wrap .icon {
    width: 39px;
    height: 39px;
}
.TalionNav-primary .nav-btns.cancel {
    color: rgba(0,0,0,0.7);
}

.TalionNav-primary .nav-btns {
    flex: 1;
    font-size: 15px;
    line-height: 21px;
    color: #3ba94d;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    white-space: nowrap;
}
.TalionNav-static:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #dfdfdf;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    transform: scale(0.5) translateX(-0.5px) translateY(-0.5px);
    transform-origin: left top;
    pointer-events: none;
}
.TalionNav-primary .search-box input[type=search] {
    box-sizing: border-box;
    -webkit-appearance: none;
    border: 0;
    padding-left: 20px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 0;
    background-size: 17.33333px;
    border-radius: 3px;
    width: 100%;
    height: 31px;
    font-size: 14px;
}

.TalionNav .btn.green {
    background-color: #42bd56;
    color: #fff;
}
.TalionNav .btn {
    width: 80px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    font-size: 13px;
    line-height: 30px;
}
.TalionNav .info h2 {
    font-size: 15px;
    line-height: 21px;
    color: #191919;
    margin: 0;
    font-weight: normal;
}
.TalionNav .info p {
    font-size: 11px;
    line-height: 16px;
    color: #818181;
    margin: 0;
}
.TalionNav .info {
    flex: 1;
}
.TalionNav-static>a {
    font-size: 0;
}
.TalionNav a {
    text-decoration: none;
}
.TalionNav-static>* {
    white-space: nowrap;
}
.TalionNav .icon-wrap {
    margin-right: 10px;
}
</style>

