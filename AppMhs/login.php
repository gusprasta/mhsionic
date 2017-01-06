<?php
	header("Access-Control-Allow-Origin:*");
	include "koneksi.php";
	if ($koneksi) {
		$username = $_GET['username'];
		$password = md5($_GET['password']);
		$query = mysqli_query($koneksi, "SELECT * from login WHERE username='$username' && password='$password'");
		if($query->num_rows > 0){
			$err = "ya";
		}
		else{
			$err = "tidak";
		}
		echo $err;

		
	}
?>