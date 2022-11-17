import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import countriesInfo from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';





function App() {
  const [countries, setCountries] = useState(countriesInfo);

 
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => setCountries(response.data))
      .catch((err) => console.log(err));
  }, []);


  countries.sort((a, b) => a.name.common > b.name.common);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />
        <Route path="/countries" element={<CountriesList countries={countries} />} />
      </Routes>
      <CountriesList countries={countries} />
    </div>
  );
}



export default App;









// function App() {
//   return (
//     <div className="App">
//       <Navbar />

//     <div className="container">
//       <div className="row">
//         <CountriesList countries={countries} />
//           <Route path="/" element={<Navbar />} />
//           <Routes>
//           <Route path="/" element={<CountriesList />} />
//           <Route path="/:id" element={<CountryDetails />} />
//             </Routes>
//     </div>
//     </div>
//     </div>
//   );
// }
