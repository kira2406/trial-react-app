import './App.css';
import { useState, useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([])

  const fetchQuotes = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchQuotes()
  }, [])


  return (
    <div className="App container">
      <h2>Quotes</h2>

      <div>
        {users.length > 0 ?
          users.map(item =>
            <Alert variant='primary'>{item?.name} - {item.email}</Alert>
          )
          :
          <Spinner animation="border" />
        }
      </div>

    </div>
  );
}

export default App;
