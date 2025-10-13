class Basket {
  constructor(notList, list) {
    this.notList = true;
    this.list = [];
    this.init();
  }
  init() {
    if (this.notList && this.checkListInCookie()) {
      this.loadListFromCookie();
    } else {
      this.createList();
    }
  }
  checkListInCookie() {
    return false;
  }
  loadListFromCookie() {}
  createList() {
    console.log("creeaza lista");
  }
  checkObInList(srv) {
    let vb = false;
    if (this.list.length) {
      this.list.map((el) => {
        if (el.serviciu === srv) return true;
      });
    }
    return vb;
  }
  addInList(ob) {
    if (!ob) return;
    const vb = this.checkObInList(ob.serviciu);
    if (!vb) {
      this.list.push(ob);
    }
  }
  showLista() {
    console.log(this.list);
  }
  getListDimension() {
    return this.list.length;
  }
  animatePriceButton(top, left) {
    console.log(top, left);
  }
  createCircle(top, left, width, height) {
    const circle = document.createElement("div");
    circle.style.position = "absolute";
    circle.style.zIndex = "9999999";
    circle.style.top = top - 5 + "px";
    circle.style.left = left - 5 + "px";
    circle.style.width = width + "px";
    circle.style.height = height + "px";
    circle.style.border = "4px solid #cccccc45";
    circle.style.backgroundColor = "#cccccc45";
    circle.style.borderRadius = "50%";
    circle.classList.add("snd-circle-animated");
    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    let st = `.snd-circle-animated {          
              animation: 0.3s linear forwards wavecircle;              
              }
              `;
    styleSheet.insertRule(st, 0);
    st = `@keyframes wavecircle {
                  from {
                    border-width: 7px;
                  }
                  to {
                    transform: scale(2);
                    opacity: 0;
                    border-width: 10px;
                  }  
              }
              `;
    styleSheet.insertRule(st, 1);
    document.body.appendChild(circle);
    setTimeout(() => {
      circle.remove();
      document.head.removeChild(styleEl);
    }, 400);
  }
  animateSelectedPrice(rowId, priceClass, btn) {
    // called by the snd-price-button
    this.clonePriceNode(rowId, priceClass, btn);
  }
  clonePriceNode(rowId, priceClass, btn) {
    const elBasket = document.querySelector("snd-basket-services");
    if (rowId && priceClass && elBasket && btn) {
      const posbtn = btn.getBoundingClientRect();
      const elbtn_top = posbtn.top + window.scrollY;
      const elbtn_left = posbtn.left + window.scrollX;
      const elbtn_width = posbtn.width;
      const elbtn_height = posbtn.height;

      const posb = elBasket.getBoundingClientRect();
      const elb_top = posb.top + window.scrollY;
      const elb_left = posb.left + window.scrollX;

      const parent = document.querySelector("#" + rowId);
      if (parent) {
        const priceEl = document.querySelector("#" + rowId + " ." + priceClass);
        if (priceEl) {
          const pos = priceEl.getBoundingClientRect();
          const el_top = pos.top + window.scrollY;
          const el_left = pos.left + window.scrollX;

          const dW = posb.width - posb.width / 2;
          const dw = pos.width - pos.width / 2;
          const dl = dW - dw;
          const priceClone = priceEl.cloneNode(true);

          priceClone.style.position = "absolute";
          priceClone.style.zIndex = "99999999";
          priceClone.style.top = el_top + "px";
          priceClone.style.left = el_left + "px";

          priceClone.classList.add("snd-price-animation");

          document.body.appendChild(priceClone);
          this.createCircle(elbtn_top, elbtn_left, elbtn_width, elbtn_height);

          // add animation to the stylesheeet
          const styleEl = document.createElement("style");
          document.head.appendChild(styleEl);
          const styleSheet = styleEl.sheet;
          let st = `.snd-price-animation {
              border: 1px solid #c9b674de;
              animation: 0.7s linear forwards movetobasket;
              
              }
              `;
          styleSheet.insertRule(st, 0);
          st = `@keyframes movetobasket {
                  
                  to {
                    top: ${elb_top}px;
                    left: ${elb_left + dl}px;
                    background-color: #c9b674de;
                    
                  }  
              }
              `;
          styleSheet.insertRule(st, 1);
          setTimeout(() => {
            elBasket.animateOpen();
            setTimeout(() => {
              document.head.removeChild(styleEl);
              priceClone.remove();
            }, 200);
          }, 600);
        }
      }
    }
    return "nothing";
  }
}

var SNDObject = new Basket();
