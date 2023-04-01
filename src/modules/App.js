import Row from './Row';
import Header from './Header';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [isUnitCelsius, setIsUnitCelsius] = useState(false)
  const [isModalVisisble, setIsModalVisisble] = useState(false)
  const [isNewCity, setIsNewCity] = useState(false)
  const [modalCity, setmodalCity] = useState(
    {
      name: "",
      latitude: "",
      longitude: ""
    }
  )
  const [cities, setCities] = useState(
    [
      {
        name: "Hyderabad",
        latitude: 17.385044,
        longitude: 78.486671
      }
    ]
  )

  function toggleUnit(event) {
    setIsUnitCelsius(event.target.checked)
  }

  function deleteCity(index) {
    let localCites = [...cities]
    localCites.splice(index, 1)
    setCities(localCites)
  }

  function updateModalCityProperty(propertyName, newValue) {
    let localCity = {...modalCity}
    localCity[propertyName] = newValue
    setmodalCity(localCity)
  }

  function addCity() {
    setIsNewCity(true)
    setmodalCity(
      {
        name: "",
        latitude: "",
        longitude: ""
      }
    )
    setIsModalVisisble(true)
  }

  function editCity(index) {
    setIsNewCity(false)
    setmodalCity({...cities[index], index: index})
    setIsModalVisisble(true)
  }
  
  function updateCity() {
    if(isNewCity) {
      let localCites = [...cities]
      localCites.push(modalCity)
      setCities(localCites)
    } else {
      let localCites = [...cities]
      let index = modalCity.index
      delete modalCity["index"]
      localCites[index] = modalCity
      console.log(localCites)
      setCities(localCites)
    }
    setIsModalVisisble(false)
  }
  
  let count = 0

  return (
    <div className="App">
      <div className="container my-5">
        <Header onToggle={toggleUnit} onAdd={addCity}></Header>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Temperature</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              cities.map((city, index) => {
                return <Row 
                  key={count} 
                  sno={++count} 
                  city={city} 
                  onDelete={() => deleteCity(index)}
                  onEdit={() => editCity(index)} 
                  isUnitCelsius={isUnitCelsius}
                />
              })
            }
          </tbody>
        </table>
        <Modal 
          isNewCity={isNewCity} 
          city={modalCity} 
          show={isModalVisisble} 
          dismissModal={() => setIsModalVisisble(false)}
          updateProperty = {updateModalCityProperty}
          updateCity = {updateCity}
        />
      </div>
    </div>
  );
}

export default App;
