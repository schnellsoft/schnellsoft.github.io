class CResizeManager {
    constructor() {
        this.initElem(); 
        this.createObserver(); 
        this.observeCards();     
    }
    initElem() {
        this.vcards = document.querySelectorAll(".card");
    }
    createObserver() {
        this.resizeObserver = new ResizeObserver((entries) => {
            for(const entry of entries) {
                if(entry.contentBoxSize) {
                   //console.log("w1: " + entry.contentBoxSize[0].inlineSize);
                    let elw = entry.contentBoxSize[0].inlineSize;
                    const cdesc = entry.target.querySelector(".card-desc");
                    const elbtn = entry.target.querySelector(".ccbtn");
                    const eldesc = entry.target.querySelector(".item1");
                    const elimg = entry.target.querySelector(".item2");
                    const ccnt = entry.target.querySelector(".item3");
                    // console.log(elw);
                    // console.dir(entry.target.innerHTML);
                    if(elw >= 400){
                        ccnt.classList.remove("ontop");
                        cdesc.classList.add("cshowleft");
                        elbtn.classList.add("chide");
                        elimg.classList.remove("large");
                        eldesc.classList.remove("hide");
                        continue;
                    } else {
                        cdesc.classList.remove("cshowleft");
                        elbtn.classList.remove("chide");
                        elimg.classList.add("large");
                        eldesc.classList.add("hide");
                        ccnt.classList.add("ontop");
                        continue;
                    }
                }
            }
        }); 
    }
    observeCards() {
        for(const el of this.vcards) this.resizeObserver.observe(el);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const obmng = new CResizeManager();
    for(const elem of obmng.vcards) {
        const btn = elem.querySelector(".ccbtn");
        const ct = elem.querySelector(".item3");
        btn.addEventListener(
          "click",
          () => {
            if (ct.dataset.state == "up") {
              ct.dataset.state = "down";
            } else if (ct.dataset.state == "down" || ct.dataset.state == "")
              ct.dataset.state = "up";
          },
          false
        ); 
    }
}, false);

// window.addEventListener("error", function (e) {
//   console.error(e.message);
// });