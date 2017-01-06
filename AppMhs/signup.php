<?php
	error_reporting(E_ALL & ~E_NOTICE);
	header("Access-Control-Allow-Origin:*");
	header("Access-Control-Allow-Methods:PUT,GET,DELETE,POST,OPTIONS");
	header("Access-Control-Allow-Headers:Content-Type,x-xsrf-token");

	include "koneksi.php";
	$data = json_decode(file_get_contents("php://input"));
		
	if (isset($data)) {
		$username = mysqli_real_escape_string($koneksi, $data->username);
		$pwd= mysqli_real_escape_string($koneksi, $data->password);
		$password = md5($pwd);

		

		$query = mysqli_query($koneksi, "INSERT into login (username, password) values('$username','$password')");
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