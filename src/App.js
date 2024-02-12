import "bootstrap/dist/css/bootstrap.min.css";
// import "leaflet/dist/leaflet.css";
import Map from "./map";
import UserPanel from "./userPanel";

function App() {
  // can I not link to index.css in index.html to be able to remove this?
  document.body.style.position = "relative";

  return (
    <div className="flex-container">
      <UserPanel></UserPanel>
      <Map></Map>
    </div>
  );
}

export default App;
