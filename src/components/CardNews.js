class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
//construtor
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/photo-default.png";
        newsImage.alt = "imagem da noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

//aplica estilos
    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            -webkit-box-shadow: 14px 16px 18px 10px rgba(0,0,0,0.45);
            -moz-box-shadow: 10px 10px 18px 10px rgba(0,0,0,0.45);
            box-shadow: 10px 10px 18px 10px rgba(0,0,0,0.45);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card__right > img{
            max-width: 220px;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > a{
        margin-top: 15px;
        font-size: 25px;
        
        }
        
        .card__left > p{
            color: rgb(97, 95, 95);
        }
        
        .card__left > span{
            font-weight: 400;
        }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);