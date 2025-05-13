import React from 'react';

export default function NavBar() {

  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/productos">Nav Bar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="nav">
                    <li className="nav-item">
                        <span className="nav-link active">Configuraciones</span>
                    </li>
                    <li className="nav-item"> 
                        <span className="nav-link active">Otra opcion</span>
                  
                    </li>
                    <li className="nav-item">
                        <span className="nav-link active">Otra opcion</span>
                    </li>
                  
                </ul>

            </div>
        </nav>
  );
}
