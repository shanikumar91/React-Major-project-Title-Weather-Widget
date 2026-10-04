// import './App.css'
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui//icons-material/Delete";
// import Alert from '@mui/material/Alert';

// // Material UI : --> Library of React UI components
//   // npm install @mui/material @emotion/react @emotion/styled
//   // npm install @fontsource/roboto
//   // npm install @mui/icons-material 
// function App() {
// let handleClick = () => {
//   console.log("Hare Krishna");
// }
//   return (
//     <>
//     <h1>Material UI Demo</h1>
//     {/* <Button>Click Me!</Button> */}
//     {/* <Button variant='contained'>Click Me!</Button> */}
//     <Button onClick={handleClick} variant='contained'>Click Me1!</Button>
//     <br /><br />
//     <Button onClick={handleClick} variant='contained' disabled>Click Me2!</Button>
//     <br /><br />
//     <Button onClick={handleClick} variant='contained'  color='error'>Click Me2!</Button>
//     <br />
//     <br />
//     <Button onClick={handleClick} variant='contained' color='success'>Click Me2!</Button>
//     <br /><br />
//     <Button onClick={handleClick} variant='contained' color='success' size='small'>Click Me2!</Button>
//     <br /><br />
//     <Button onClick={handleClick} variant='contained' color='success' size='small' startIcon={<DeleteIcon/>}>Delete</Button>

//     <Alert severity='error'>This is an error alert - check it out!</Alert>
//     </>
//   )
// }
// export default App


import './App.css'
import WeatherApp from './WeatherApp.jsx'

function App() {
  return (
    <div>
      <WeatherApp/>
    </div>
  )
}
export default App