const ctarticles = document.querySelector(".articles");
const docTitle = document.querySelector(".doc-title");
const listTitle = document.querySelector(".list-title");
const obcrt = {
  listid: "",
  listTitle: "",
  docTitle: "",
  articles: [],
  path: "./list.json",
  async populate() {
    const request = new Request(this.path);
    const response = await fetch(request);
    const resp  = await response.json();
    this.docTitle = resp.doctitle;
    this.listid = resp.listid;
    this.listTitle = resp.listtitle;
    this.articles = resp.articles;
    // console.log(this.articles);
    this.populateArticles();
  },
  populateArticles() {
    if (this.articles.length) {
      ctarticles.innerHTML = "";
      listTitle.innerHTML = this.listTitle;
      docTitle.innerHTML = this.docTitle;
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
    // el_a.href = "./list-items/s-" + article.id;
    el_a.href = "../../samples/list-"+article.listid+"/list-items/s-"+article.id;
    el_a.target = "_blank";
    el_h2.textContent = article.title;
    el_p.textContent = article.descrShort;
    el_a.appendChild(el_h2);
    el_a.appendChild(el_p);
    el_article.appendChild(el_a);
    ctarticles.appendChild(el_article);
  },
};