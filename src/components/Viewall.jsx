import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const[data,setData]=new useState(

        
        [{"name":"abc","rollno":1,"admissionno":341,"college":"fisat"},
        {"name":"ggc","rollno":2,"admissionno":341,"college":"fisat"},
        {"name":"jcl","rollno":3,"admissionno":341,"college":"fisat"},
        {"name":"sdf","rollno":4,"admissionno":341,"college":"fisat"},
        {"name":"wsx","rollno":5,"admissionno":341,"college":"fisat"}]
    )
    return (
        <div>
<Navbar/>
                <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Rollno</th>
      <th scope="col">Admissionnumber</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{value.name}</th>
            <td>{value.rollno}</td>
            <td>{value.admissionno}</td>
            <td>{value.college}</td>
          </tr>
       
        }
    )
   }
   
  </tbody>
</table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Viewall