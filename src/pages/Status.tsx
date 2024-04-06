import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

/**  
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado;
 * 2. Toda vez que o seu componente PAI renderizar;
 * 3. Toda vez que alguma das suas propriedades mudarem.
*/

/**
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente;
 * 2. Compara essa nova versão com a versão anterior do HTML (chamado de Diff dentro do REACT);
 * 3. Aplicar as operações Javascript para alterar somente o necessário no HTML.
 */

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso',
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }


  return (
    <main className='status'>
          <Header title='Tweet'/>

          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores modi inventore voluptates deleniti corporis dolorem sed, ex animi voluptatum, illum numquam rem commodi similique aperiam voluptas perferendis tenetur quaerat ratione?"/>

          <Separator />

          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/Geomis-anonimo.png" alt="Messias Junior" />
              <textarea
              id="tweet"
              placeholder="Tweet yout answer"
              value={newAnswer}
              onKeyDown={handleHotkeySubmit}
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
              />
            </label>

            <button type='submit'>
              <PaperPlaneRight />
              <span>Answer</span>
              </button>
          </form>



          {answers.map(answer => {
            return <Tweet key={answer} content={answer}/>
          })}
        </main>
  )
}