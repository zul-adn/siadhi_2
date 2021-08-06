import React from 'react'
import { connect } from 'react-redux'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Covid = (props) => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(6);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <>
            <div className="main-content">
                <div className="header">
                    <p>Penyebaran Covid 19 Kota Singkawang</p>
                </div>
                <div className="w-100 p-20" >
                    <Document
                       
                        file="https://dinartech.com/ar/pdf-skw.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {[1, 2, 3, 4, 5, 6].map(pageNumber => (
                            <Page pageNumber={pageNumber} />
                        ))}
                    </Document>
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
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
