import GraphicDesktop from "./components/GraphicDesktop"
import GraphicMobile from "./components/GraphicMobile"
import Header from "./components/Header"
import Showcase from "./components/Showcase"
import StandOut from "./components/StandOut"
import Transform from "./components/Transform"
import Testimonials from"./components/Testimonials"
import GridMobile from "./components/GridMobile"
import GridDesktop from "./components/GridDesktop"
import{gridDesktop} from"./data/grid"

const App = () =>{
  return (
  <>

  <Header/>
  <Showcase/>
  <Transform/>
  <StandOut/>
  <div className="block md:hidden">
  <GraphicMobile/>
  </div>
 
  <div className="block md:hidden">
  <GraphicDesktop/>
  </div>

  <Testimonials/>
  <div>
<GridMobile/>
</div>
<div>
<GridDesktop/>
</div>

  </>

  )
}

export default App;
