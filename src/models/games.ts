// Classe usada para preencher no componente ProductList
// que este preenche o componente Product

class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    categoria: string,
    descricao: string,
    imagemDoJogo: string,
    informacao: string[],
    sistema: string,
    tituloDoJogo: string // titulo: string
  ) {
    this.id = id
    this.category = categoria
    this.description = descricao
    this.image = imagemDoJogo
    this.infos = informacao
    this.system = sistema
    this.title = tituloDoJogo // this.title = titulo
  }
}

export default Game
