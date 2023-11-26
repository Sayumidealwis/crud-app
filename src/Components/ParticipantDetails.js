import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import './ParticipantDetails.css'

const ParticipantDetails = () => {
  const partid = useParams() //params object will contain the values of the parameters extracted from the current URL.

  const [pardata, pardatachange] = useState({}) //intial value is an empty arr or objetc

  useEffect(() => {
    fetch('http://localhost:5087/api/Participant/' + partid['id'])
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        pardatachange(resp)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      {pardata && (
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h2>Participant Details</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <div className="form-control">
                  <div className="details-card">
                    <h3>Participant Id : {pardata.id}</h3>
                    <h3>Participant Name : {pardata.name}</h3>
                    <h3>Participant Email : {pardata.email}</h3>
                    <h3>Participant Address : {pardata.address}</h3>
                  </div>
                </div>
                <Link to="/" className="btn btn-danger">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParticipantDetails
