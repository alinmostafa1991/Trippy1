import './Card.css'

const Card = ({img , title , desc}) => {
  return (
    <div className='card'>
      <div className='image'><img src={img} alt="" /></div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Card
