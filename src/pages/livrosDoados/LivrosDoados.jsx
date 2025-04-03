import styleLivrosDoados from './livrosDoados.module.scss'
import livroVermelho from '../../assets/livroVermelho.png'

export default function LivrosDoados() {
  return (
    <section className={styleLivrosDoados.livrosDoados}>
      <h1>
        Livros Doados
      </h1>

      <section className={styleLivrosDoados.cardsLivrosDoados}>

        <section className={styleLivrosDoados.livro}>

          <img src={livroVermelho} alt="imagem de um livro  " />
          <p>O protagonista</p>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </section>

      </section>

    </section>
  )

}