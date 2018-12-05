import React from 'react';

export const FormHasilLab = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Hasil Lab</h2>
            <h6> Nama Pasien : {props.pasien.nama} </h6><br></br>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis"/>
            </div>

            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil"/>
            </div>

            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan"/>
            </div>
            
            <button className="btn btn-success" value="submit">Simpan</button>
        </form>
    )
}