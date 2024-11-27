import './App.css'
import { Child, ChildrenSelector } from './components/children-selector/children-selector'

function App() {

  const children: Child[] = [
    { id: 1, name: "Fergus", gender: "male", description: "Significa 'homem de vigor', 'homem de força'. Esse nome é a forma anglicizada de Fearghas, que é composto pelos elementos irlandeses fear, que significa 'homem', e gus, que quer dizer 'vigor', 'força'" },
    { id: 2, name: "Felícia", gender: "female", description: "De origem latina, Felicia deriva do termo 'felix', que significa 'feliz' ou 'afortunada'. É um nome feminino que está associado à ideia de felicidade e boa sorte." },
    { id: 3, name: "Clodaldo", gender: "male", description: "Significa chefe ilustre e indica uma pessoa com capacidade de sobra para liderar as outras, mas que só assume o comando quando é convidada. Em geral, prefere desenvolver atividades individuais, pois tende a confiar mais em si mesmo que em grupos de trabalho." }
  ]

  return (
    <div className='app-container'>
      <div className='navbar'>
        <div className='logo'>J<span>❤️</span>L</div>
        <div>Joara</div>
      </div>
      <div className='content'>
        <h1>Seja bem-vinda meu amor ❤️</h1>
        <p>Essa plataforma foi pensada e desenvolvida com todo o carinho e amor pelo homem que você AMA (nunca vou me acostumar com isso 😍) para te auxiliar na escolha dos nomes e da quantidade exata dos filhinhos que teremos juntos 👪.</p>
        <b>Selecione abaixo a quantidade e os nomes que mais prefere:</b>

        <p>💡 Dica: você pode clicar novamente no filho para cancelar a seleção</p>

        <ChildrenSelector children={children} />
      </div>
    </div>
  )
}

export default App
