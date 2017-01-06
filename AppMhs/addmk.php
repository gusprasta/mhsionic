<?php
	error_reporting(E_ALL & ~E_NOTICE);
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Methods:PUT,GET,DELETE,POST,OPTIONS");
	header("Access-Control-Allow-Headers:Content-Type,x-xsrf-token");

	include "koneksi.php";
	$data = json_decode(file_get_contents("php://input"));
	if (isset($data)) {
		$idmk = mysqli_real_escape_string($koneksi, $data->idmk);
		$nama= mysqli_real_escape_string($koneksi, $data->nama);
		$sks= mysqli_real_escape_string($koneksi, $data->sks);

		$query = mysqli_query($koneksi, "INSERT into matakuliah (idmk, nama, sks) values('$idmk','$nama','$sks')");
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