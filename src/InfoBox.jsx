import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';



export default function InfoBox({ info }){
    const INIT_URL = "https://tse3.mm.bing.net/th/id/OIP.bAlbzshaeQqr5LHmM2ty0wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3";
    const HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=0&k=20&c=8DxY8mLBr1ogKBwHxxC0bd6lv8tlBXytISdAjdPBhTE= ";
    const COLD_URL = "https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg";
    const RAIN_URL = "https://th.bing.com/th/id/OIP.uTRxyDECsATN2PI-2a0XuQHaEo?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3 ";


    // let Info = {
    // city: "Delhi",  
    // feelsLike: 38.49,
    // humidity: 12,
    // temp: 41.05,
    // tempMax: 41.05,
    // tempMin: 41.05,
    // weather: "Clear" 
    // };


    return(
        <div className="InfoBox"> 

        <h1>WeatherInfo  - {info.weather} </h1>
        <div className= "cardContainer">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city } {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2"  component={"span"}  sx={{ color: 'text.secondary' }}>
           <div>
            Temperature = { info.temp} °C <br /> <br />
            Humidity = { info.humidity}% <br /> <br />
            Max Temp = { info.tempMax} °C <br /> <br />
            Min Temp = { info.tempMin} °C 
            <p>
              This Weather can be described as <i> {info.weather} </i> and feels like  
              { info.feelsLike} °C <br />
            </p>
     
           </div>
        </Typography>
      </CardContent>
     
    </Card>

        </div>
        </div>
    )
}

