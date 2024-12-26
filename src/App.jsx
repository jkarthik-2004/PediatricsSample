import HeaderComponent from "./components/HeaderComponent";
import PatientDetails from "./components/PatientDetails";
import sampleData from "./data/SampleData";

export default function App() {
  return (
    <div>
      <HeaderComponent/>
      <PatientDetails data={sampleData}/>
    </div>
  )
}