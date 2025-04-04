import styleQueroDoar from './queroDoar.module.scss'
import livroazul from '../../assets/icones_queroDoar/livrodoForm.png'
import axios from "axios"
import { useState } from 'react'

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [autor, setAutor] = useState("")
  const [imagem_url, setLinkImagem] = useState("")

  
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

  const enviarDadosLivro = async (e) => {
    e.preventDefault()
    
    try {
      const dados = {
        titulo,
        categoria,
        autor,
        imagem_url
      }
      
      await axios.post('https://api-livros-2hzy.onrender.com/doar', dados)
      alert('Livro doado com sucesso!')
      
      
      setTitulo("")
      setCategoria("")
      setAutor("")
      setLinkImagem("")
      
    } catch (error) {
      alert('Erro ao doar livro: ' + error.message)
    }
  }

  return (
    <section className={styleQueroDoar.conteinerQuerodoar}>
      <h1>Por favor, preencha o formulário com suas informações e as informações do Livro</h1>
      <form onSubmit={enviarDadosLivro} className={styleQueroDoar.formulario}>
        <img src={livroazul} alt="Desenho de um livro" />

        <input type="text" name="titulo" placeholder="Titulo" onChange={capturarTitulo} value={titulo} required />
        
        <input 
          type="text" 
          name="categoria" 
          placeholder="Categoria" 
          onChange={capturarCategoria}
          value={categoria} 
          required 
        />
        
        <input 
          type="text" 
          name="autor" 
          placeholder="Autor" 
          onChange={capturarAutor}
          value={autor} 
          required 
        />
        
        <input 
          type="url" 
          name="image_url" 
          placeholder="Link da imagem" 
          onChange={capturarLinkImagem}
          value={imagem_url} 
          required 
        />

        <button type="submit">Doar</button>
      </form>
    </section>
  )
}