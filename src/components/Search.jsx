import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
<Navbar/>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Emp Code</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    
                <button className="btn btn-success">Search</button>
                   
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search