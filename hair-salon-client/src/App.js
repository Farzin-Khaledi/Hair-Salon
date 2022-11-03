import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StylistListPage from "./pages/StylistListPage";
import AppointmentListPage from "./pages/AppointmentListPage";
import AppointmentDetails from "./pages/AppointmentDetails";
// import EditProjectPage from "./pages/EditProjectPage";
import AddAppointment from "./components/AddAppointment";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import AddStylist from "./components/AddStylist";
import EditAppointment from "./pages/EditAppointment";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/add-appointments"
          element={ <AddAppointment /> } 
        />


        <Route
          path="/appointments"
          element={ <IsPrivate> <AppointmentListPage /> </IsPrivate> } 
        />
 <Route
          path="/stylists"
          element={ <StylistListPage />} 
        />
       <Route
          path="/appointments/:appointmentId"
          element={ <AppointmentDetails />  }
        />
        <Route path="/add-stylist" element={ <IsPrivate><AddStylist /> </IsPrivate>} />

        <Route path="/appointments/edit/:appointmentId" element={<IsPrivate> <EditAppointment /> </IsPrivate>} />


        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
