function thayDoi() {
    const MauNen = document.getElementById('MauNen').value;
    const MauChu = document.getElementById('MauChu').value;
    const TieuDe = document.getElementById('TieuDe').value;
    const TrangThai = document.getElementById('TrangThai').value;

    document.body.style.backgroundColor = MauNen;
    document.body.style.color = MauChu;

    document.title = TieuDe;

    window.status = TrangThai;
}
