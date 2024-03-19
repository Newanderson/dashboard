import RouteApp from "./router";
import { BrowserRouter } from "react-router-dom";


function App(){
    return(
        <div>
          <BrowserRouter>
            <RouteApp/>
          </BrowserRouter>
        </div>
    )
}

export default App;