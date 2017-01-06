<?php
	error_reporting(E_ALL & ~E_NOTICE);
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Methods:PUT,GET,DELETE,POST,OPTIONS");
	header("Access-Control-Allow-Headers:Content-Type,x-xsrf-token");

	include "koneksi.php";
	$data = json_decode(file_get_contents("php://input"));
	if (isset($data)) {
		$nim = mysqli_real_escape_string($koneksi, $data->nim);
		$nama= mysqli_real_escape_string($koneksi, $data->nama);
		$jur= mysqli_real_escape_string($koneksi, $data->jur);
		

		$query = mysqli_query($koneksi, "UPDATE mahasiswa SET nama = '$nama', jurusan = '$jur' WHERE nim = '$nim'");
		if($query){
			$err = 0;
		}
		else{
			$err = 1;
		}
		echo $err;
		# code...
	}


?>