import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            
            <div className='container'>
            <h2>Some 3d model links are displayed below Please click on the particular button to view it.</h2>
            
                <div className="card text-center">
                    <div className="card-header">
                    <h1>3D Model-(Square)</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/Squaremodel" className="btn btn-primary">Click me to view the 3d structure of Square!!!</Link>
                    </div>
                </div>
                
                <div className="card text-center">
                    <div className="card-header">
                    <h1>3D Model-(Sphere)</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/spheremodel" className="btn btn-primary">Click me to view the 3d structure of Sphere!!!</Link>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-header">
                        <h1>3D Model-(Ring)</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/ringmodel" className="btn btn-primary">Click me to view the 3d structure of Ring!!!</Link>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-header">
                        <h1>3D Model-(Capsule)</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/capsulemodel" className="btn btn-primary">Click me to view the 3d structure of Capsule!!!</Link>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-header">
                        <h1>3D Model-(Cone)</h1>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/Cone" className="btn btn-primary">Click me to view the 3d structure of Cone!!!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
