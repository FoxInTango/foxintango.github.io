function onBoot() {
    var contentView = document.getElementById("content");
    var langaugeView = document.getElementById("language");

    if (langaugeView != null) {
        langaugeView.innerText = "Current Language : " + getBrowserLang();
    }
    console.log(contentView);
    var xhr = new XMLHttpRequest();
    var all = new String();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let parser = new DOMParser();
            let html = parser.parseFromString(this.responseText,"text/html");
            //contentView.innerHTML = this.responseText;
            let items = html.getElementsByTagName("span"); //sentence
            
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                //let index = item.firstChild.innerText;
                let sentence = item.innerText;
                all += sentence + "\n";
            }
            
            
            let tokens = all.split(" ");
            let set = new Set();
            for (var i = 0; i < tokens.length; i++) {
                if (set.has(tokens[i])) continue;
                set.add(tokens[i]);
            }
            all += "Token Count: " + all.length + "\n";
            
            all += "All Words : "  + tokens.length.toString() + "\n";
            set.forEach(function (item) {
                all += item + "\n";
            });
            
            contentView.innerText = all;
        }
    };
    xhr.open("GET", "圣经/10.html", true);
    //xhr.open("GET", "https://www.baidu.com", true);
    //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
}

function getBrowserLang () {
    let browserLang = navigator.language
        ? navigator.language
        : navigator.browserLanguage;
    let defaultBrowserLang = "";
    if (
        browserLang.toLowerCase() === "us" ||
        browserLang.toLowerCase() === "en" ||
        browserLang.toLowerCase() === "en_us"
    ) {
        defaultBrowserLang = "en_US";
    } else {
        defaultBrowserLang = "zh_CN";
    }
    return defaultBrowserLang;
};
window.onload = onBoot;