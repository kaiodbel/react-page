import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import ListItem from './components/ListItem'
import { gamesListData, channelListData, socialListData } from './components/Info'


function App() {
  return (
    <div className="App">
        <Header />

        <main>
          <Section 
          tittle='Meus Jogos'
          subtittle='Os games que eu mais curto jogar'
          className="games-list"
          >
          {
            gamesListData.map(function(item) {
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
            
          </Section>
          
          <Section 
          tittle='Canais e Streamers'
          subtittle='Lista de Canais e transmissões que não perco'
          className="channel-list"
          >
          {
            channelListData.map(function(item) {
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            }) 
          }
          </Section>

          <Section
          tittle='Minhas Redes'
          subtittle='Se conecte comigo agora mesmo!'
          className='social-list'
          >
          {
            socialListData.map(function(item) {
              return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
              )
            })
          }
          </Section>

        </main>

    </div>
  )
}

export default App
