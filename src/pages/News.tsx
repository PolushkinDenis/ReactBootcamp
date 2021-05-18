import * as React from 'react'

import { NewsItem } from '../components/NewsItems'
import { INewsItem } from '../models/news'

const API_KEY = "833d126842633355dcaa4c641a86c646"


const News: React.FC = () => {
  const [news, setNews] = React.useState([])
  const [coord, setValue] = React.useState([])
  
  // React.useEffect(() => {
  //   async function fetchUserToResult() {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts,hourly&appid=${API_KEY}&units={metric}`);
  //     const json = await response.json();
  //     setNews(json.daily)
  //     console.log(json)
  //   }
    
  // }, [])


  const cityHandler = (event: any) => {
    var price = event.split(',');  
    var lat = price[0]
    var lon = price[1]
    fetchUserToResult();
    async function fetchUserToResult() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts,hourly&appid=${API_KEY}&units={metric}`);
      const json = await response.json();
      setNews(json.daily)
    }
  }

  return (
    <div className="news">
         <select value={coord} onChange={(event: any) => cityHandler(event.target.value)}>
                <option >Select city</option>
                <option selected value="53.195873,50.100193">Samara</option>
                <option value="53.507836,49.420393">Tolyatti</option>
                <option value="51.533557,46.034257">Saratov</option>
                <option value="55.796127,49.106405">Kazan</option>
                <option value="45.035470,38.975313">Krasnodar</option>
            </select>
       {news.map(item => (
         <NewsItem data={item} />
       ))}
    </div>
  )
}

export { News }

// const News: React.FC = () => {
//   const [news, setNews] = React.useState<INewsItem[]>([])

//   React.useEffect(() => {
//     getNews()
//       .then(res => {
//         setNews(res.data)
//       })
//       .catch(err => {
//         // tslint:disable-next-line: no-console
//         console.warn('Getting news problem', err)
//       })
//   }, [])

//   return (
//     <div className="news">
//       {console.log(news)}
//       {news.map(item => (
//         <NewsItem data={item} key={item.id} />
//       ))}
//     </div>
//   )
// }

// export { News }