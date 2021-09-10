// start @ favicon
document.querySelector("link[rel*='icon']").href = "https://saasmantra.com/images/favicon.ico";
console.log('Custom favicon loaded')
// end @ favicon

// start @ header
window.timer = setInterval(function(){
    if ( document.querySelector('header.navigation-header') !== undefined && document.querySelector('header.navigation-header') !== null  ) {
        clearInterval(window.timer);
        let header = document.createElement("div");
        header.classList = "CustomHeader";
        header.innerHTML = '<div class="CustomHeader-block"><div class="CustomHeader-block-cell cell-logo"><div class="cell-inner">Logo</div></div><div class="CustomHeader-block-cell cell-navigation"><ul><li><a href="#">Support</a></li></ul></div></div>';
        document.querySelector('header.navigation-header').prepend(header);
    }
},100);
// end @ header