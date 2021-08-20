import React from 'react';
import { connect } from "react-redux";
import { getTempatIbadah, getSome } from '../../store/app/action';
import { MDBDataTableV5 } from 'mdbreact';



function Pancagatra({ datas_tempat_ibadah, getTempatIbadah,getSome, some_datas, isLoading }) {

    React.useEffect(() => {
        getTempatIbadah()
        getSome()
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

    const [dataForkopimda, setDataForkopimda] = React.useState({
        columns: [
            {
                label: 'Nama Pejabat',
                field: 'nama',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Jabatan',
                field: 'jabatan',
                width: 270,
            },
            {
                label: 'Alamat',
                field: 'alamat_kantor',
                width: 200,
            },

        ],
        rows: some_datas.forkopimda
    });

    const [dataPemerintahan, setDataPemerintahan] = React.useState({
        columns: [
            {
                label: 'Nama Pejabat',
                field: 'nama_pejabat',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Jabatan',
                field: 'jabatan',
                width: 270,
            },
            {
                label: 'SKPD',
                field: 'nama_skpd',
                width: 200,
            },
            {
                label: 'Alamat',
                field: 'alamat_skpd',
                width: 200,
            },

        ],
        rows: some_datas.pemerintahan
    });

    const [dataOrmas, setDataOrmas] = React.useState({
        columns: [
            {
                label: 'Nama Ormas',
                field: 'nama_ormas',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Ketua',
                field: 'ketua',
                width: 270,
            },
            {
                label: 'No Surat',
                field: 'no_surat',
                width: 200,
            },
            {
                label: 'Alamat',
                field: 'alamat',
                width: 200,
            },
            {
                label: 'Periode',
                field: 'periode',
                width: 200,
            },

        ],
        rows: some_datas.yayasan
    });

    const [dataOKP, setDataOKP] = React.useState({
        columns: [
            {
                label: 'Nama OKP',
                field: 'nama_okp',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Ketua',
                field: 'ketua',
                width: 270,
            },
            {
                label: 'No Akta',
                field: 'no_akta',
                width: 200,
            },
            {
                label: 'Alamat',
                field: 'alamat',
                width: 200,
            },

        ],
        rows: some_datas.okp
    });

    const [dataTokoh, setDataTokoh] = React.useState({
        columns: [
            {
                label: 'Nama Tokoh',
                field: 'nama_tokoh',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Jabatan',
                field: 'bidang',
                width: 270,
            },
            {
                label: 'Jumlah Pendukung',
                field: 'jumlah_pendukung',
                width: 200,
            },
            {
                label: 'Alamat',
                field: 'alamat',
                width: 200,
            },
            {
                label: 'No HP',
                field: 'no_telp',
                width: 200,
            },

        ],
        rows: some_datas.tokoh
    });

    return (
        <>

            <div className="main-content">
                <div className="header">
                    <p>Pemerintahan Kota Singkawang</p>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey p-20">
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={dataPemerintahan} searchTop searchBottom={false} />
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p>Forkopimda</p>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey p-20">
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={dataForkopimda} searchTop searchBottom={false} />
                    </div>
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
                    <p>Yasyasan / Organisasi Masyarakat</p>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey p-20">
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={dataOrmas} searchTop searchBottom={false} />
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p>Organisasi Kemasyarakatan Pemuda</p>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey p-20">
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={dataOKP} searchTop searchBottom={false} />
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p>Tokoh Masyarakat</p>
                </div>
                <div className="flex-col p-20">
                    <div className="border-grey p-20">
                        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={10} pagesAmount={4} data={dataTokoh} searchTop searchBottom={false} />
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="header">
                    <p></p>
                </div>
            </div>


        </>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas_tempat_ibadah: app.datas_tempat_ibadah,
        some_datas: app.some_datas,
        isLoading: app.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTempatIbadah: () => dispatch(getTempatIbadah()),
        getSome: () => dispatch(getSome()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pancagatra);
