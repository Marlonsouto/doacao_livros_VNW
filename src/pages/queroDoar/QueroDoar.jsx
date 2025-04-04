import styleQueroDoar from './queroDoar.module.scss'
import livroazul from '../../assets/icones_queroDoar/livrodoForm.png'
import axios from "axios"
import { useState } from 'react'


export default function QueroDoar() {

  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [linkImagem, setLinkImagem] = useState("")

  const capturarTitulo = (t) => {
    setTitulo(t.target.value)
  }

  const capturarCategoria = (t) => {
    setCategoria(t.target.value)
  }

  const capturarAutor = (t) => {
    setAutor(t.target.value)
  }

  const capturarLinkImagem = (t) => {
    setLinkImagem(t.target.value)
  }

  const enviarDadosLivro = async () => {
    const dados = {
      titulo,
      categoria,
      autor,
      linkImagem
    }
    await axios.post('https://api-livros-2hzy.onrender.com/doar', dados)
  }

  return (
    <section className={styleQueroDoar.conteinerQuerodoar}>
      <h1>Por favor, preencha o formulário com suas informações e as informações do Livro</h1>
      <form onSubmit={(e) => e.preventDefault()} className={styleQueroDoar.formulario} >
        <img src={livroazul} alt="Desenho de um livro" />

        <input type="text" name="titulo" id="" placeholder="Titulo" onChange={setTitulo} requered />
        <input type="text" name="categoria" id="" placeholder="Categoria" onChange={setCategoria} requered />
        <input type="text" name="autor" id="" placeholder="Autor" onChange={setAutor} requered />
        <input type="url" name="LinkImagem" id="" placeholder="Link da imagem" onChange={setLinkImagem} requered />

        <button type="submit" onClick={enviarDadosLivro} > Doar </button>

      </form>

    </section>
  )

}
