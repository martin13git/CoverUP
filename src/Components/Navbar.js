import React from 'react'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-">
      <div className="container-fluid me-auto">
        <a className="navbar-brand" href="/">
          <img src="/notebook.png" alt="" width="30" height="30" />
        </a>
        <a className="navbar-brand me-auto" href="/">{props.heading}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}
