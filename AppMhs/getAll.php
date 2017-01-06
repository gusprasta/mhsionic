<?php
	header("Access-Control-Allow-Origin:*");
	// $koneksi = mysqli_connect("localhost", "root","","ionicuser");
	include "koneksi.php";
	if ($koneksi) {
		$query = mysqli_query($koneksi, "SELECT * from mahasiswa");
		$data = array();

		while ($row=$query->fetch_assoc()) {
			$data[] = $row;
			# code...
		}
		echo json_encode($data);
		# code...
	}
?>