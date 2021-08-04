import React from 'react'
import { connect } from 'react-redux'

export const Covid = (props) => {

    const iframeRef= React.useRef()

    React.useEffect(() => {
            const h1 = iframeRef.current.contentWindow.document.body.querySelector('.page-title')
            console.log(h1)
    }, [iframeRef.current])

    return (
        <>
            <div className="main-content">
                <div className="header">
                    <p>Penyebaran Covid 19</p>
                </div>
                <div className="w-100 p-20" >
                <iframe ref={iframeRef} src="https://siagacorona.semarangkota.go.id/halaman/covid19" width="100%" height="2500px"  scrolling="no"></iframe>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <p>footer</p>
                </div>
                
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Covid)
