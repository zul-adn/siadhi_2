import React from 'react';
import { connect } from "react-redux";
import { getTempatIbadah } from '../../store/app/action';
import { MDBDataTableV5 } from 'mdbreact';



function Pancagatra({ datas_tempat_ibadah, getTempatIbadah }) {

    React.useEffect(() => {
        getTempatIbadah()
    }, [])

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Nama Tempat Ibadah',
                field: 'nama_tempat_ibadah',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Jenis Tempat Ibadah',
                field: 'jenis',
                width: 270,
            },
            {
                label: 'Kecamatan',
                field: 'nama_kecamatan',
                width: 200,
            },
            {
                label: 'Kontak',
                field: 'no_telp',
                sort: 'asc',
                width: 100,
            },

        ],
        rows: datas_tempat_ibadah
    });

    return (
        <>

            <div className="main-content">
                <div className="header">
                    <p>Pemerintahan Kota Singkawang</p>
                </div>

            </div>
            <div className="main-content">
                <div className="header">
                    <p>Tempat Ibadah</p>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey p-20">
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={datatable} searchTop searchBottom={false} />
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <p>Perusahaan</p>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas_tempat_ibadah: app.datas_tempat_ibadah,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTempatIbadah: () => dispatch(getTempatIbadah()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pancagatra);
