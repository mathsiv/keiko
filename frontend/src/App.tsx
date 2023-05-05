import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"
import { Pokemon } from "./pages/Pokemon"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pokemon" element={<Pokemon />}/>
            <Route path="hello" />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
