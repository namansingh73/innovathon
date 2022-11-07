import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hospital from "./pages/hospital/Hospital";
import Patient from "./pages/patient/Patient";
import Operator from "./pages/operator/Operator";
import PatientStatus from "./components/Hospital/PatientStatus/PatientStatus";
import UpdateStatus from "./components/Operator/UpdateStatus/UpdateStatus";
import TrackAmbulance from "./components/Hospital/TrackAmbulance/TrackAmbulance";
import Home from "./components/Patient/Home/Home";
import Events from "./components/Hospital/Events/Events";
import TrackPatient from "./components/Operator/TrackPatient/TrackPatient";
import TrackAmbulanceByPatient from "./components/Patient/TrackAmbulance/TrackAmbulance";
import UpdateLocation from "./components/Operator/UpdateLocation/UpdateLocation";
import ViewEvents from "./components/Patient/Events/ViewEvents";
import ChecklistMain from "./components/Patient/ChecklistMain/ChecklistMain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/hospital" exact element={<Hospital />} />
        <Route path="/hospital/status" exact element={<PatientStatus />} />
        <Route path="/hospital/track" exact element={<TrackAmbulance />} />
        <Route path="/hospital/events" exact element={<Events />} />
        <Route path="/operator" exact element={<Operator />} />
        <Route path="/operator/status" exact element={<UpdateStatus />} />
        <Route path="/operator/track/" exact element={<UpdateLocation />} />
        <Route path="/operator/track/:id" exact element={<TrackPatient />} />
        <Route path="/patient" exact element={<Patient />} />
        <Route path="/patient/home" exact element={<Home />} />
        <Route path="/patient/events" exact element={<ViewEvents />} />
        <Route path="/patient/checklist" exact element={<ChecklistMain />} />
        <Route
          path="/patient/track/:id"
          exact
          element={<TrackAmbulanceByPatient />}
        />
      </Routes>
    </div>
  );
}

export default App;
