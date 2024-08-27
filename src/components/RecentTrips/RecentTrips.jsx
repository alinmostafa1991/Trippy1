import Card from '../Card/Card'
import Title from '../Title/Title'
import './RecentTrips.css'

const RecentTrips = () => {
    const data = [
        {
            img : "/assets/images/5.jpg",
            title : "Trip in Indonesia",
            desc : "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
        },
        {
            img : "/assets/images/8.jpg",
            title : "Trip in Malaysia",
            desc : "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia.",
        },
        {
            img : "/assets/images/6.jpg",
            title : "Trip in France",
            desc : "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans.",
        },
    ]
  return (
    <div className='recent'>
        <Title title = "RecentTrips" desc = "You can discover unique destination using Google Maps."/>
        <div className='container'>
            {data.map((element , index) => {return(
                <Card key={index} img={element.img} title={element.title} desc={element.desc}/>
            )})}
        </div>
    </div>
  )
}

export default RecentTrips
