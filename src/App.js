
import React, { useState } from 'react';
import StateGrid from './components/StateGrid';
import StateDetails from './components/StateDetails';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Switch from 'react-switch'
import Navbar from './components/Navbar';
import About from './components/About';
const statesData = {
  "states": [
    {
      "name": "Maharashtra",
      "temperature": 78,
      "cities": [
        {
          "name": "Mumbai",
          "population": 1000000,
          "income": 50000
        },
        {
          "name": "Pune",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Nagpur",
          "population": 1200000,
          "income": 60000
        },
        {
          "name": "Thane",
          "population": 900000,
          "income": 58000
        },
        {
          "name": "Nashik",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Uttar Pradesh",
      "temperature": 1,
      "cities": [
        {
          "name": "Lucknow",
          "population": 900000,
          "income": 48000
        },
        {
          "name": "Kanpur",
          "population": 700000,
          "income": 52000
        },
        {
          "name": "Agra",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Varanasi",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Allahabad",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Tamil Nadu",
      "temperature": 34,
      "cities": [
        {
          "name": "Chennai",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Coimbatore",
          "population": 600000,
          "income": 48000
        },
        {
          "name": "Madurai",
          "population": 950000,
          "income": 52000
        },
        {
          "name": "Tiruchirappalli",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Salem",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Karnataka",
      "temperature": 30,
      "cities": [
        {
          "name": "Bangalore",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Mysore",
          "population": 900000,
          "income": 54000
        },
        {
          "name": "Mangalore",
          "population": 1300000,
          "income": 60000
        },
        {
          "name": "Hubli-Dharwad",
          "population": 700000,
          "income": 52000
        },
        {
          "name": "Belgaum",
          "population": 850000,
          "income": 48000
        }
      ]
    },
    {
      "name": "Gujarat",
      "temperature": 52,
      "cities": [
        {
          "name": "Ahmedabad",
          "population": 700000,
          "income": 42000
        },
        {
          "name": "Surat",
          "population": 500000,
          "income": 45000
        },
        {
          "name": "Vadodara",
          "population": 850000,
          "income": 48000
        },
        {
          "name": "Rajkot",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Gandhinagar",
          "population": 1200000,
          "income": 60000
        }
      ]
    },
    {
      "name": "West Bengal",
      "temperature": 8,
      "cities": [
        {
          "name": "Kolkata",
          "population": 1000000,
          "income": 50000
        },
        {
          "name": "Howrah",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Durgapur",
          "population": 1200000,
          "income": 60000
        },
        {
          "name": "Asansol",
          "population": 900000,
          "income": 58000
        },
        {
          "name": "Siliguri",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Rajasthan",
      "temperature": 72,
      "cities": [
        {
          "name": "Jaipur",
          "population": 900000,
          "income": 48000
        },
        {
          "name": "Jodhpur",
          "population": 700000,
          "income": 52000
        },
        {
          "name": "Udaipur",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Kota",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Ajmer",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Madhya Pradesh",
      "temperature": 24,
      "cities": [
        {
          "name": "Indore",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Bhopal",
          "population": 600000,
          "income": 48000
        },
        {
          "name": "Jabalpur",
          "population": 950000,
          "income": 52000
        },
        {
          "name": "Gwalior",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Ujjain",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Kerala",
      "temperature": -80,
      "cities": [
        {
          "name": "Thiruvananthapuram",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Kochi",
          "population": 900000,
          "income": 54000
        },
        {
          "name": "Kozhikode",
          "population": 1300000,
          "income": 60000
        },
        {
          "name": "Thrissur",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Kollam",
          "population": 1200000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Andhra Pradesh",
      "temperature": 2,
      "cities": [
        {
          "name": "Vijayawada",
          "population": 700000,
          "income": 42000
        },
        {
          "name": "Visakhapatnam",
          "population": 500000,
          "income": 45000
        },
        {
          "name": "Guntur",
          "population": 850000,
          "income": 48000
        },
        {
          "name": "Nellore",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Kurnool",
          "population": 1200000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Telangana",
      "temperature":-6,
      "cities": [
        {
          "name": "Hyderabad",
          "population": 1200000,
          "income": 60000
        },
        {
          "name": "Warangal",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Nizamabad",
          "population": 1000000,
          "income": 50000
        },
        {
          "name": "Karimnagar",
          "population": 900000,
          "income": 58000
        },
        {
          "name": "Khammam",
          "population": 1100000,
          "income": 58000
        }
      ]
    },
    {
      "name": "Bihar",
      "temperature": 50,
      "cities": [
        {
          "name": "Patna",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Gaya",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Bhagalpur",
          "population": 950000,
          "income": 52000
        },
        {
          "name": "Muzaffarpur",
          "population": 1200000,
          "income": 60000
        },
        {
          "name": "Purnia",
          "population": 700000,
          "income": 42000
        }
      ]
    },
    {
      "name": "Odisha",
      "temperature": 80,
      "cities": [
        {
          "name": "Bhubaneswar",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Cuttack",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Rourkela",
          "population": 950000,
          "income": 52000
        },
        {
          "name": "Berhampur",
          "population": 1200000,
          "income": 60000
        },
        {
          "name": "Sambalpur",
          "population": 700000,
          "income": 42000
        }
      ]
    },
    {
      "name": "Assam",
      "temperature": 4,
      "cities": [
        {
          "name": "Guwahati",
          "population": 900000,
          "income": 48000
        },
        {
          "name": "Dibrugarh",
          "population": 700000,
          "income": 52000
        },
        {
          "name": "Silchar",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Jorhat",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Nagaon",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Jharkhand",
      "temperature": 22,
      "cities": [
        {
          "name": "Ranchi",
          "population": 700000,
          "income": 42000
        },
        {
          "name": "Jamshedpur",
          "population": 500000,
          "income": 45000
        },
        {
          "name": "Dhanbad",
          "population": 850000,
          "income": 48000
        },
        {
          "name": "Bokaro",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Hazaribagh",
          "population": 1200000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Haryana",
      "temperature": 8,
      "cities": [
        {
          "name": "Chandigarh",
          "population": 1000000,
          "income": 50000
        },
        {
          "name": "Faridabad",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Gurgaon",
          "population": 1200000,
          "income": 60000
        },
        {
          "name": "Panipat",
          "population": 900000,
          "income": 58000
        },
        {
          "name": "Ambala",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Punjab",
      "temperature": 32,
      "cities": [
        {
          "name": "Ludhiana",
          "population": 900000,
          "income": 48000
        },
        {
          "name": "Amritsar",
          "population": 700000,
          "income": 52000
        },
        {
          "name": "Jalandhar",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Patiala",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Bathinda",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Chhattisgarh",
      "temperature": 4,
      "cities": [
        {
          "name": "Raipur",
          "population": 800000,
          "income": 45000
        },
        {
          "name": "Bhilai",
          "population": 600000,
          "income": 48000
        },
        {
          "name": "Bilaspur",
          "population": 950000,
          "income": 52000
        },
        {
          "name": "Korba",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Durg",
          "population": 1300000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Jammu and Kashmir",
      "temperature": 30,
      "cities": [
        {
          "name": "Srinagar",
          "population": 1100000,
          "income": 58000
        },
        {
          "name": "Jammu",
          "population": 900000,
          "income": 54000
        },
        {
          "name": "Anantnag",
          "population": 1300000,
          "income": 60000
        },
        {
          "name": "Baramulla",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Udhampur",
          "population": 1200000,
          "income": 60000
        }
      ]
    },
    {
      "name": "Tripura",
      "temperature": 52,
      "cities": [
        {
          "name": "Agartala",
          "population": 700000,
          "income": 42000
        },
        {
          "name": "Udaipur",
          "population": 500000,
          "income": 45000
        },
        {
          "name": "Dharmanagar",
          "population": 850000,
          "income": 48000
        },
        {
          "name": "Kailashahar",
          "population": 800000,
          "income": 55000
        },
        {
          "name": "Ambassa",
          "population": 1200000,
          "income": 60000
        }
      ]
    }
  ]
}

;

function App() {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleCloseDetails = () => {
    setSelectedState(null);
  };

  return (
    <Router>
  <div>
    <Navbar />
    <Routes>
    
      <Route
        path="/"
        element={
          <main>
            {selectedState ? (
              <StateDetails state={selectedState} onClose={handleCloseDetails} />
            ) : (
              <StateGrid states={statesData.states} onStateClick={handleStateClick} />
            )}
          </main>
        }
      />
     <Route path="/about" element={<About />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;

