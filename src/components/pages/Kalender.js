import React from 'react';
import { connect } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
import { getPdf } from './../../store/app/action';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export const Kalender = ({getPdf, datas_pdf}) => {

    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(6);

    const URL = 'https://polres-singkawang.com/siadhi/public/file/'

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
                        <p>Kalender Kamtibmas Polres Singkawang</p>
                    </div>
                    <div className="w-100 p-20" >
                        <Document

                            file={`${URL}${datas_pdf.kalender[0].nama_file}`}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(pageNumber => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Kalender)
