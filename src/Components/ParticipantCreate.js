import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Forms.css'

const ParticipantCreate = () => {
  const [id, idchange] = useState('')
  const [name, namechange] = useState('')
  const [email, emailchange] = useState('')
  const [address, addresschange] = useState('')
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault() //Handle action manually using an API call
    const participantdata = { id, name, email, address }

    fetch('http://localhost:5087/api/Participant', {
      //options object that defines the details of the fecth request(method,headers,body)

      method: 'POST', //specify the http mthod use for the request send data to endpoint
      headers: { 'content-type': 'application/json' }, //set request headers
      body: JSON.stringify(participantdata), //converts the participantdata object into a JSON string.
    })
      .then((res) => {
        alert('Saved successfully')
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <form className="container" onSubmit={handlesubmit}>
      <div className="card">
        <div className="card-title">
          <h2>Add Participants</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Id</label>
            <input
              value={id} //sets its initial value to the id variable.
              onChange={(e) => idchange(e.target.value)} //eventhandler is triggered when the user change the input . update the field with new input value
              className="form-control"
            ></input>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => namechange(e.target.value)}
              className="form-control"
            ></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => emailchange(e.target.value)}
              className="form-control"
            ></input>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => addresschange(e.target.value)}
              className="form-control"
            ></input>
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-info" type="submit">
              Save
            </button>
            <Link to="/" className="btn btn-dark">
              Back
            </Link>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ParticipantCreate
