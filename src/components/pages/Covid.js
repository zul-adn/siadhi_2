import React from 'react'
import { connect } from 'react-redux'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { getPdf } from './../../store/app/action';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Covid = ({ getPdf, datas_pdf }) => {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(6);

    const URL = 'https://dinartech.com/siadhi/public/file/'

    React.useEffect(() => {
        getPdf()
    }, [])

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <>
            {datas_pdf.length === 0 ? "Loading" :
                <div className="main-content">
                    <div className="header">
                        <p>Penyebaran Covid 19 Kota Singkawang</p>
                    </div>
                    <div className="w-100 p-20" >
                        <Document

                            file={`${URL}${datas_pdf.covid[0].nama_file}`}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {[1, 2, 3, 4, 5, 6].map(pageNumber => (
                                <Page pageNumber={pageNumber} />
                            ))}
                        </Document>
                        {/* <p>Page {pageNumber} of {numPages}</p> */}
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas_pdf: app.datas_pdf,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPdf: () => dispatch(getPdf()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Covid)
