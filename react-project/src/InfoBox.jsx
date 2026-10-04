import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const INIT_IMAGE = "https://images.unsplash.com/photo-1566995589099-45de344a6dbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1732905212385-a28d9ee50512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYXRoZXJob3QlMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://media.istockphoto.com/id/172699850/photo/climbing-everest.webp?a=1&b=1&s=612x612&w=0&k=20&c=s5kd-OXe8i0CSAYS0Ki1z0goJ-Mn1HbeGQfn8HnIemc=";
    const RAIN_URL = "https://media.istockphoto.com/id/1757967583/photo/rain-on-umbrella-background-weather-forecast-and-environment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=6B1Hwuxw-bpHaZQmpXHuHjvL_hnuHOJ8_AJkrU-uM5Y=";
    return(
 <div className = "InfoBox">
       <div className="cardContainer"> 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>TempMin = {info.tempMin}&deg;C</p>
          <p>TempMax = {info.tempMax}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>FeelsLike = {info.feelsLike}&deg;C</p>
          <p>Weather = {info.weather}</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
</div>
    );
}