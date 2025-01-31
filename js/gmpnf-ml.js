// olgmpnafa
function olgmpnafa(index) {
  const nmanggo = prompt('Masukkan nomor anggota Perpustakaan Anda:');
  if (danggo.includes(Number(nmanggo))) {
    window.location.href = radargmpnafa[index];
  } else {
    if (confirm('Nomor Anggota Perpustakaan yang Anda masukkan tidak terdaftar. Apakah Anda ingin mendaftar anggota atau tetap di halaman ini?')) {
      // Redirect ke halaman pendaftaran
      window.location.href = '/p/daftar-anggota-perpustakaan.html';
    } else {
      alert('Anda tetap berada di halaman ini.');
    }
  }
}