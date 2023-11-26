import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ParticipantEdit = () => {
  const partid = useParams() //params object will contain the values of the parameters extracted from the current URL.
  //console.log(partid)
  //const [pardata, pardatachange] = useState({}) //intial value is an empty arr or objetc

  const [id, idchange] = useState('')
  const [name, namechange] = useState('')
  const [email, emailchange] = useState('')
  const [address, addresschange] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5087/api/Participant/' + partid['id'])
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        idchange(resp.id)
        namechange(resp.name)
        emailchange(resp.email)
        addresschange(resp.address)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const handlesubmit = (e) => {
    e.preventDefault()
    const participantdata = { id, name, email, address }

    fetch('http://localhost:5087/api/Participant/' + partid['id'], {
      //options object that defines the details of the fecth request
      method: 'PUT', //replace a resource with a similar resource that includes a different set of values
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
    <div>
      <form className="container" onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-title">
            <h2>Participant Edit</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Id</label>
              <input
                value={id} //sets its initial value to the id variable.
                onChange={(e) => idchange(e.target.value)} //eventhandler is triggered when the user change the input . update the is with new input value
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

            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Save
              </button>
              <div>
                <Link to="/" className="btn btn-danger">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ParticipantEdit
