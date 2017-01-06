<?php
	header("Access-Control-Allow-Origin:*");
	// $koneksi = mysqli_connect("localhost", "root","","ionicuser");
	include "koneksi.php";
	if ($koneksi) {
		$nim = $_GET['nim'];
		$delete = mysqli_query($koneksi, "DELETE from mahasiswa where nim='$nim'");
		if ($delete) {
			echo "1";
		}

	
	}
?>