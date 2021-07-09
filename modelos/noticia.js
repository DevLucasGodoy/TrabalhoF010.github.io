class Noticia {
  constructor(title, publishedAt, description, author, url) {
    this._title = title;
    this._publishedAt = publishedAt;
    this._description = description;
    this._author = author;
    this._url = url;
  }

  get mostrarNoticia(){
    try {
      return this.montarNoticia();
    } catch(erro){
      return erro.name
    } finally{
      console.log("Codigo finalizado com sucesso");
    }
  }

  montarNoticia() {
    if (this._title != ""){
      return "<a href="+ this._url +">" + "<h3>" + this._title + "</h3>" + "</a>" + "<h4>" + "Data de publicação: " + this._publishedAt + "</h4>" + "<h5>" + "Autor: " + this._author + "</h5>" + "<p>" + this._description + "</p>" + "<br />";
         
      
    } else {
      throw new ErroCustomizado("Item em falta, título e data da publicação, não podem estar vazios");
    }
  }
}