import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching dentist details: ', error));
  }, [id]);

  return (
    <div className={`container-col ${state.theme}`}>
      <h1>Detail Dentist - ID {id} </h1>
      <div className="container-row">
        {dentist ? (
          <table>
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{dentist.name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{dentist.email}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{dentist.phone}</td>
              </tr>
              <tr>
                <td><strong>Website:</strong></td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Detail;