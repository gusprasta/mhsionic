<?php
	header("Access-Control-Allow-Origin:*");
	include "koneksi.php";
	if ($koneksi) {
		$nim = $_GET['nim'];
		$query = mysqli_query($koneksi, "SELECT * from mahasiswa where nim='$nim'");
		$data = array();

		while ($row=$query->fetch_assoc()) {
			$data[] = $row;
			
		}
		echo json_encode($data);
		# code...
	}
?>