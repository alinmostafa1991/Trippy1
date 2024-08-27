import './PopularContainer.css'

const PopularContainer = ({title , desc , firstImg , secImg , reverse}) => {
  return (
    <div className={(reverse)? `Container ${reverse}` : "Container"}>

        <div className='txt'>
        <h2>{title}</h2>
        <p className='desc'>{desc}</p>
        </div>

        <div className='images'>
        <img src={firstImg} alt="" />
        <img src={secImg} alt="" />
        </div>

    </div>
  )
}

export default PopularContainer

