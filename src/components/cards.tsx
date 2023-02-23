import { useBoard } from '../global/board'
import '../styles/cards.css'
import Card from './card'

const Cards = () => {
  const { generation, alive, deaths, births } = useBoard();

  return (
    <div className='cards-container'>
      <Card 
        text='Generation'
        icon='fa-solid fa-chart-line'
        data={generation}
        background='#FEF6EE'
        color='#FFA63F'
      />
      <Card 
        text='Alive'
        icon='fa-solid fa-heart'
        data={alive}
        background='#F0FBF8'
        color='#3BCFAD'
      />
      <Card 
        text='Births'
        icon='fa-solid fa-circle-plus'
        data={births}
        background='#E5F1FF'
        color='#1882FF'
      />
      <Card 
        text='Deaths'
        icon='fa-solid fa-skull'
        data={deaths}
        background='#FFF6F8'
        color='#FF707D'
      />
    </div>
  )
}

export default Cards