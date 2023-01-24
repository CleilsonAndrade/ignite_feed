import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cleilsonandrade.png',
      name: 'Cleilson Andrade',
      role: 'Web'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor'},
      { type: 'paragraph', content: 'sit amet consectetur adipisicing elit. '},
      { type: 'paragraph', content: 'Dolorum, non! Officiis obcaecati voluptates amet, laboriosam nulla vero aliquam quasi. Perferendis consectetur rem impedit eligendi. Aperiam debitis fugit pariatur. Quasi, porro!'},
      { type: 'link', content: '#nlw #rocket'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Naruto Uzumaki',
      role: 'Ninja'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor'},
      { type: 'paragraph', content: 'sit amet consectetur adipisicing elit. '},
      { type: 'paragraph', content: 'Dolorum, non! Officiis obcaecati voluptates amet, laboriosam nulla vero aliquam quasi. Perferendis consectetur rem impedit eligendi. Aperiam debitis fugit pariatur. Quasi, porro!'},
      { type: 'link', content: '#nlw #rocket'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}
