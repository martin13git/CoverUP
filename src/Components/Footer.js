import React from 'react'
import TermsofServices from './TermsofServices'
import Privacypolicy from './Privacypolicy'

export default function Footer() {

    return (
        <div>
            <div className="d-flex flex-column h-100">

                <section className="hero text-white py-7 flex-grow-1">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="promotxt font-display font-bold m-0 text-4xl md:text-5xl ms-auto">CoverUP</h1>
                                <ul>
                                        <li className="fst-italic text-muted py-1">Made with ❤️ for effortless cover design.</li>
                                        <li className="fst-italic text-muted py-1">Design like a pro, in no time.</li>
                                        <li className="fst-italic text-muted py-1">The fastest way to create professional cover pages.</li>
                                    </ul>
                                
                                    
                                
                            </div>
                        </div>
                    </div>
                </section>


                <footer className="w-100 py-7 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-6 col-md-12">
                                <p className="small text-muted">Designed and developed by Martin Purification</p>
                                <p className="small text-muted mb-0">&copy; 2024 CoverUP. All rights reserved. Designed to make cover creation a breeze.</p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <ul className="list-unstyled text-muted">
                                    <li><a data-bs-toggle="modal" data-bs-target="#termsofservices" href="#termsofservices">Term of Services</a></li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#privacypolicy" href="#privacypolicy">Privacy Policy</a></li>
                                </ul>

                                <div className="modal fade" id="termsofservices" tabIndex="-1" aria-labelledby="termsofservicesLabel" aria-hidden="true">
                                    <TermsofServices />
                                </div>

                                <div className="modal fade" id="privacypolicy" tabIndex="-1" aria-labelledby="privacypolicyLabel" aria-hidden="true">
                                    <Privacypolicy/>
                                </div>


                            </div>
                            <div className="col-lg-4 col-md-6 d-flex justify-content-end">
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <a href="https://www.linkedin.com/in/martinpurification" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-warning" id="button-addon2" type="button" style={{ fontWeight: 'bold' }}>
                                                Connect through LinkedIn
                                            </button>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        </div >
    )
}
