import './App.css';
import React, { useEffect, useState } from "react";
import { db } from "./firebase_config";
import { onValue, ref } from "firebase/database";
import Table from 'react-bootstrap/Table';


function App() {
  const [values,setValues] = useState([]);

  useEffect(() => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        console.log(Object.values(data))
        setValues(Object.values(data))
      }
    });
  }, []);



  return (
    <div className="App">
      <Table striped bordered hover style={{width:'80%',margin:'auto',marginTop:'50px'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Arcing Pulses</td>
            <td>{values[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Contributing Pulses</td>
            <td>{values[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Effective Pulses</td>
            <td>{values[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Normal Pulses</td>
            <td>{values[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Total Energy</td>
            <td>{values[4]}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Total Pulses</td>
            <td>{values[5]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
