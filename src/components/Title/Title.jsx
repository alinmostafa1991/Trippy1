import './Title.css'

const Title = ({title , desc}) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Title
