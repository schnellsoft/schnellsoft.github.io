// Mobile menu
//Mobile menu button + animations attached
const menu = document.querySelector(".menu-icon");
const gotolist = document.querySelector(".gotolist");
const agotolist = document.querySelector(".gotolist > a");
const htitle = document.querySelector(".htitle");
const container = document.querySelector(".main-content");
const main = document.querySelector("main");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const articles = document.querySelectorAll(".ctaccordion > .article");
menu.addEventListener(
  "click",
  (ev) => {
    if (
      !menu.classList.contains("tr1") &&
      !container.classList.contains("ctr1")
    ) {
      menu.classList.add("tr1");
      container.classList.add("ctr1");
    } else {
      menu.classList.add("tr2");
      container.classList.add("ctr2");
    }
  },
  false
);

menu.addEventListener(
  "click",
  () => {
    if (back.style.visibility === "hidden") {
      setTimeout(() => {
        front.style.visibility = "hidden";
        back.style.visibility = "visible";
      }, 500);
    } else if (front.style.visibility === "hidden") {
      setTimeout(() => {
        back.style.visibility = "hidden";
        front.style.visibility = "visible";
      }, 500);
    }
  },
  false
);

let cnt = 0;
let cntp = 0;
menu.addEventListener(
  "animationend",
  (ev) => {
    // console.log("EEEE");
    cntp++;
    if (cntp == 3) {
      cntp = 0;
      //    front.style.display = "none";
      //    back.style.display = "block";
    }
    if (menu.classList.contains("tr2")) {
      // console.log("AAA");
      cnt++;
      if (cnt === 3) {
        // console.log("BBB");
        menu.classList.remove("tr1", "tr2");
        container.classList.remove("ctr1", "ctr2");
        cnt = 0;
        // back.style.display = "none";
        // front.style.display = "block";
        htitle.style.display = "block";
        if(obcrt && obcrt.listTitle.length > 0 && !obcrt.vbsearch) gotolist.style.display = "block";
      }
    }
  },
  false
);
menu.addEventListener(
  "animationstart",
  (ev) => {
      htitle.style.display = "none";
      gotolist.style.display = "none";
  }, false);

//Mobile accordion

const titles = document.querySelectorAll(".ctaccordion label");
titles.forEach((title) => {
  title.addEventListener(
    "click",
    (ev) => {
      let sid = ev.target.getAttribute("for");
      let elchk = document.querySelector("#" + sid);

      //// height correction /////

      const ctitems = document.querySelector("#" + sid + " ~ .act > .ct-items");
      const ctitemsp = document.querySelector(
        "#" + sid + " ~ .act > .ct-itemsp"
      );
      if (ctitems && ctitemsp) {
        // console.log("Click on title man !!!");
        ctitemsp.style.height = window.getComputedStyle(ctitems).height;
      }

      ////////////////////////////

      let el = document.querySelector("#" + sid + " ~ .act");
      if (ev.target.classList.contains("last-title")) {
        ev.target.classList.remove("last-title-opened");
        ev.target.classList.remove("last-title-closed");
      }
      if (elchk && elchk.checked) {
        el?.classList.add("deselected");
        if (ev.target.classList.contains("last-title")) {
          ev.target.classList.add("last-title-closed");
        }
      } else {
        el?.classList.remove("deselected");
        if (ev.target.classList.contains("last-title")) {
          ev.target.classList.add("last-title-opened");
        }
      }
    },
    false
  );
});
// corrections on menu article height
window.addEventListener(
  "DOMContentLoaded",
  () => {
    const articles = document.querySelectorAll(".ctaccordion > .article");
    articles.forEach((article) => {
      const ctitems = article.querySelector(".ct-items");
      const ctitemsp = article.querySelector(".ct-itemsp");
      if (ctitems && ctitemsp) {
        ctitemsp.style.height = window.getComputedStyle(ctitems).height;
        setTimeout(() => {
          // back.style.display = "none";
          back.style.visibility = "hidden";
        }, 10);
      }
    });
  },
  false
);
window.addEventListener(
  "resize",
  () => {
    // setting menu aspect
    if (window.innerWidth > 768) {
      menu.classList.remove("tr1", "tr2");
      container.classList.remove("ctr1", "ctr2");
    } else {
      // console.log("yy");
      if (
        back.style.visibility === "visible" &&
        !menu.classList.contains("tr1") &&
        !container.classList.contains("ctr1")
      ) {
        // console.log("xx");
        menu.classList.add("tr1");
        container.classList.add("ctr1");
      }
    }
    // const articles = document.querySelectorAll(".ctaccordion > .article");
    articles.forEach((article) => {
      const ctitems = article.querySelector(".ct-items");
      const ctitemsp = article.querySelector(".ct-itemsp");
      if (ctitems && ctitemsp) {
        ctitemsp.style.height = window.getComputedStyle(ctitems).height;
      }
    });
  },
  false
);
//menu's items
const ctarticles = document.querySelector(".articles");
const listTitle = document.querySelector(".list-title");
const docTitle = document.querySelector(".htitle > h2");
let obcrt = {
  vbsearch: false,
  listid: "",
  listTitle: "",
  docTitle: "",
  articles: [],
  addAnim: false,
  heightArticle0: 0,
  get path() {
    if (this.listid.trim().length) {
      return "./samples/list-" + this.listid + "/list.json";
    }
  },
  async populate() {
    const request = new Request(this.path);
    const response = await fetch(request);
    const resp  = await response.json();
    this.docTitle = resp.doctitle;
    this.listid = resp.listid;
    this.listTitle = resp.listtitle;
    this.articles = resp.articles;
    // console.log(articles);
    this.populateArticles();
  },
  populateArticles() {
    if (this.articles.length) {
      ctarticles.innerHTML = "";
      listTitle.innerHTML = this.listTitle;
      docTitle.innerHTML = this.docTitle;
      agotolist.href = "./samples/list-"+this.listid;
      // if(this.listTitle.length > 0) gotolist.style.display = "block";
      this.articles.forEach((article, i) => {
        this.populateArticle(article, i);
      });
    }
  },
  populateArticle(article, i) {
    let el_article = document.createElement("article");
    let el_a = document.createElement("a");
    let el_h2 = document.createElement("h2");
    let el_p = document.createElement("p");
    // let el_sep = document.createElement("div");
    // el_sep.classList = "separator";
    el_h2.className = "article__title";
    el_a.href =
      "./samples/list-" + article.listid + "/list-items/s-" + article.id;
    el_a.target = "_blank";
    el_h2.textContent = article.title;
    el_p.textContent = article.descrShort;
    el_a.appendChild(el_h2);
    el_a.appendChild(el_p);
    el_article.appendChild(el_a);
    // el_article.appendChild(el_sep);
    if (this.addAnim) {
      if (i === 1) {
        this.heightArticle0 =
          parseInt(window.getComputedStyle(ctarticles).height) - 20;
      }
      if (i >= 1) {
        let vv = this.heightArticle0 - i * 5;
        el_article.style.marginTop = "-" + vv + "px";
        // console.log(this.heightArticle0);
      }
      el_article.classList = "cload";
    }
    ctarticles.appendChild(el_article);

    // console.log();
  },
};
// const items = document.querySelectorAll(".ct-item > a");
const items = document.querySelectorAll("a[data-listid]");
items.forEach((item) => {
  item.addEventListener(
    "click",
    (ev) => {
      ev.preventDefault();
      obcrt.vbsearch = false;
      let a = ev.target.closest("a");
      if (
        back.style.visibility === "visible" &&
        front.style.visibility === "hidden" &&
        window.innerWidth < 768
      ) {
        obcrt.addAnim = true;
        menu.click();
      }
      obcrt.listid = a.dataset.listid;
      gotolist.style.display = "block";
      agotolist.href = "#";
      obcrt.populate();

      // console.log(tt.textContent);
    },
    false
  );
});
const asearch = document.querySelector(".asearch");
asearch.addEventListener("click", (ev) => {
    ev.preventDefault();
    obcrt.vbsearch = true;
    if (
      back.style.visibility === "visible" &&
      front.style.visibility === "hidden" &&
      window.innerWidth < 768
    ) {
      obcrt.addAnim = true;
      menu.click();
    }
    gotolist.style.display = "none";
    agotolist.href = "#";
    if ("content" in document.createElement("template")) {
      ctarticles.innerHTML = "";
      const htitle = document.querySelector(".htitle > h2");
      const title = document.querySelector("h2.list-title");
      const template = document.querySelector("#searchform");
      const clone = template.content.cloneNode(true);
      ctarticles.appendChild(clone);
      title.textContent = "Search Into The Site Content";
      htitle.textContent = "Search";
    }
}, false);
