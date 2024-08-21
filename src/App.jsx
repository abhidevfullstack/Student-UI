import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"

function App() {
  return (
    <div style={{display:'flex'}}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
