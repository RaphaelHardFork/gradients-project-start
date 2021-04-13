import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import GradientsApp from "./components/GradientsApp"
import gradients from "./gradients"

function App() {
  return (
    <div>
      <GradientsHeader gradients={gradients} />
      <GradientsApp gradients={gradients} />
      <Footer />
    </div>
  )
}

export default App