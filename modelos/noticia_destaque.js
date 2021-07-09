class NoticiaDestaque extends Noticia {
  constructor(title, publishedAt, descripition, author, image_destaque) {
    super(title, publishedAt, descripition, author)
    this._image_destaque = image_destaque;
  }

  get mostrarImage() {
    try {
      return this.montarImage();
    } catch (erro) {
      return erro.menssage
    } finally {
      console.log("Codigo finalizado com sucesso");
    }
  }

  montarImagem() {
    if (this._title != "" && this.publishedAt != "") {
      return `
        <h3><a href=""${this._url}">${this._title}</a></h3>
        <div>${this._image_destaque}</div>
        <div>${this._publishedAt}</div>
        <div>${this._descripition}</div>
        </br></br>
        
      `
    } else {
      throw new ErroCustomizado("Item em falta, título, data da publicação e texto não podem ser vazios");
    }
  }
}