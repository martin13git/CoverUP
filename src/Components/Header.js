import React from 'react'

export default function Header() {
    // const handleclick=()=> {
    //     const sectionElement = document.scrollspyHeading1;
    //       window.scrollTo({
    //         top: sectionElement,
    //         behavior: 'smooth' // Smooth scrolling animation
    //       });
    //   }

    return (
        <>
            <div className='promo'>
                <h2 className="promotxt font-display font-bold m-0 text-4xl md:text-5xl text-center">CoverUP: Your Perfect Cover Page in Seconds</h2>
                <h6 className="promotxt font-display m-0 text-sm text-center">Save time and effort with our easy-to-use cover page generator.</h6>
            </div>
            <br />
            <div className="Container">
                <div className='Panel justify-content-center text-center m-0'>
                <img src="/img.png" className="headerimg m-0" alt="START DESIGNING" style={{ width: 'auto', height: '475px' }}/>
                
                </div>
                <div className='Panel'>
                    <div className='funbtn'>
                        <button type="button" className="btn btn-outline-info m-3 button-for-display">Easy to Use</button>
                        <button type="button" className="btn btn-outline-info m-3 button-for-display">Instant Download</button>
                        <button type="button" className="btn btn-outline-info m-3 button-for-display">High Quality</button>
                    </div>
                    <br />
                    <p className='headertxt fst-italic' style={{ textAlign: 'justify' }}>Creating professional cover pages has never been easier! At CoverUP, we understand that designing a cover page from scratch can be time-consuming and tedious. That's why we've developed a simple yet powerful tool to help you generate stunning cover pages in just a few clicks.
                        <br /><br />
                        Whether you're working on a report, thesis, project, or any other document, CoverUP allows you to quickly create a polished and professional cover page by simply entering a few details. Our intuitive interface and customizable templates ensure that your cover page will stand out and make a great first impression.
                        <br /><br />
                        Save time and effort with CoverUP, and focus on what really matters – your content. Try it now and see how easy it is to create beautiful cover pages!
                    </p>
                </div>

            </div>
        </>
    )
}
