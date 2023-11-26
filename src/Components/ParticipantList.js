import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ParticipantList = () => {
  const [data, datachange] = useState([]) //data is the useState variable and it is initilized with null value. datachange function is used to update the value of data variable
  const navigate = useNavigate()

  //fetch is a js function used to make network requests. Use to retrive data from server like Jason
  useEffect(() => {
    fetch('http://localhost:5087/api/Participant')
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        datachange(resp)
        console.log(resp)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const LoadEdit = (id) => {
    navigate('/participant/edit/' + id)
  }
  const LoadDetail = (id) => {
    navigate('/participant/detail/' + id)
  }
  const DeleteRecord = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch('http://localhost:5087/api/Participant/' + id, {
        //options object that defines the details of the fecth request
        method: 'DELETE', //specify the http mthod use for the request
      })
        .then((res) => {
          alert('Removed successfully')
          window.location.reload() //refresh page
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Participants</h2>
        </div>
        <div className="card-body">
          <div>
            <Link
              to="/participant/create"
              className="btn btn-success"
              style={{ float: 'left', margin: '4px' }}
            >
              Add New
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr style={{ fontWeight: 'bold' }}>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <button
                        onClick={() => {
                          LoadEdit(item.id)
                        }}
                        className="btn btn-success"
                        style={{ margin: '3px' }}
                      >
                        <a>Edit</a>
                      </button>
                      <button
                        onClick={() => {
                          DeleteRecord(item.id)
                        }}
                        className="btn btn-danger"
                        style={{ margin: '3px' }}
                      >
                        <a>Remove</a>
                      </button>
                      <button
                        onClick={() => {
                          LoadDetail(item.id)
                        }}
                        className="btn btn-info"
                        style={{ margin: '3px' }}
                      >
                        <a>Details</a>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ParticipantList
