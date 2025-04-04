import styleLivrosDoados from './livrosDoados.module.scss'
import livroVermelho from '../../assets/livroVermelho.png'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function LivrosDoados() {

  const [livros, setLivros] = useState([])

  const receberLivros = async () => {
    try {
      const livrosEncontrados = await axios.get('https://api-livros-2hzy.onrender.com/livros')

      if (livrosEncontrados.data && livrosEncontrados.data.length > 0)
        setLivros(livrosEncontrados.data)
      else {
        console.error("Nao ha livros registrados ")
        setLivros([])  
      }
    } catch (error) {
      alert( 'Busca nao encontrada'+ error.message)    }
  }
  

  useEffect(() => {
    receberLivros()
  }, [])


  return (
    <section className={styleLivrosDoados.livrosDoados}>
      <h1>
        Livros Doados
      </h1>

      <section className={styleLivrosDoados.cardsLivrosDoados}>

        {
          livros.map((livro) => (
            <section className={styleLivrosDoados.livro}>
              <img src= {livro.image_url} alt={'capa do livro ${livro.titulo}'} />
              <p>{livro.titulo}</p>
              <p>{livro.autor}</p>
              <p>{livro.categoria}</p>
            </section>
          ))}

      </section>

    </section>
  )

}