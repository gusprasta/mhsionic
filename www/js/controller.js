angular.module('MyApp', [])
.controller('Ctrl_Add', function($scope,$http,$ionicLoading, $state){
	$scope.tambahData =function(ctt){
		// alert(User.nim);
		$ionicLoading.show();
		$http.post('http://localhost/AppMhs/addmhs.php',{
			nim : ctt.nim,
			nama: ctt.nama,
			jur : ctt.jur

		}).then(function(result){
			console.log(result.data);
			$ionicLoading.hide();
			$state.go('menu');
		})
	}
	
})
.controller('Ctrl_Addmk', function($scope,$http,$ionicLoading, $state){
	$scope.tambahData =function(ctt){
		// alert(User.nim);
		$ionicLoading.show();
		$http.post('http://localhost/AppMhs/addmk.php',{
			idmk : ctt.idmk,
			nama: ctt.nama,
			sks : ctt.sks

		}).then(function(result){
			console.log(result.data);
			$ionicLoading.hide();
			$state.go('menu');
		})
	}
	
})
.controller('Ctrl_View', function($scope,$http,$ionicLoading){
	
	$ionicLoading.show();
	$http.get('http://localhost/AppMhs/getAll.php')
	.then(function(result){
		$scope.dataMhs = result.data;
		$ionicLoading.hide();
	})
	$scope.doRefresh = function() {
   
    $scope.$broadcast('scroll.refreshComplete');
    $http.get('http://localhost/AppMhs/getAll.php')
	.then(function(result){
		$scope.dataMhs = result.data;
		$ionicLoading.hide();
	})
 
};
	
	
})
.controller('Ctrl_Detail', function($scope,$http,$stateParams){
	// alert($stateParams.nim);
	$scope.data = {
		nim: '',
		nama: '',
		jurusan: ''
	}
	var nim = $stateParams.nim;
	$http.get('http://localhost/AppMhs/detailMhs.php?nim='+nim)
	// $http.get('http://localhost/AppMhs/detailMhs.php?nim='+nim+'&pass='+pass)
	.then(function(result){
		$scope.data.nim = result.data[0].nim;
		$scope.data.nama = result.data[0].nama;
		$scope.data.jurusan = result.data[0].jurusan;

		console.log(result.data[0].nama);


	})
	$scope.doRefresh = function() {
   
    $scope.$broadcast('scroll.refreshComplete');
    $http.get('http://localhost/AppMhs/detailMhs.php?nim='+nim)
	
	.then(function(result){
		$scope.data.nim = result.data[0].nim;
		$scope.data.nama = result.data[0].nama;
		$scope.data.jurusan = result.data[0].jurusan;


	})
	
   
 
}
})
.controller('Ctrl_Login', function($scope,$http,$ionicLoading,$state){
	$scope.loginFB = function(){
		var auth = firebase.auth();
		var provider = new firebase.auth.FacebookAuthProvider();
		auth.signInWithPopup(provider).then(function(result){
			console.log(result.user);
			alert("Selamat Datang "+result.user.displayName);
			$state.go('menu');
		})
	}


	$scope.loginData =function(log){
		 // alert(log.password);
		$ionicLoading.show();
		$http.get('http://localhost/AppMhs/login.php?username='+log.username+'&password='+log.password)
		.then(function(result){
			//console.log(result.data);
			if (result.data == "ya") {
				$state.go('menu');
			}
			else{
				log.username = '';
				log.password = '';
				$state.go('login');
			}

			$ionicLoading.hide();
			
		})

		// $http.post('http://localhost/AppMhs/addmk.php',{
		// 	idmk : ctt.idmk,
		// 	nama: ctt.nama,
		// 	sks : ctt.sks

		// }).then(function(result){
		// 	console.log(result.data);
		// 	$ionicLoading.hide();
		// 	$state.go('menu');
		// })
	}
	
})
.controller('Ctrl_Signup', function($scope,$http,$ionicLoading, $state){
	$scope.signupData =function(ctt){
		// alert(User.nim);
		$ionicLoading.show();
		$http.post('http://localhost/AppMhs/signup.php',{
			username : ctt.username,
			password: ctt.password,
	

		}).then(function(result){
			console.log(result.data);
			$ionicLoading.hide();
			$state.go('login');
		})
	}
	
})
.controller('Ctrl_Delete', function($scope,$http,$stateParams,$ionicLoading, $state){
	// alert($stateParams.nim);
	$ionicLoading.show();
	$scope.data = {
		nim: '',
		nama: '',
		jurusan: ''
	}
	var nim = $stateParams.nim;
	$http.get('http://localhost/AppMhs/delete.php?nim='+nim)
	

	.then(function(result){
		if (result.data == "1") {
			//alert("data terhapus");
			$ionicLoading.hide();
			$state.go('view');
		}

	})
})
.controller('Ctrl_Update', function($scope,$http,$stateParams, $ionicLoading, $state){
	// alert($stateParams.nim);
	$scope.data = {
		nim: '',
		nama: '',
		jurusan: ''
	}
	var nim = $stateParams.nim;
	$http.get('http://localhost/AppMhs/update.php?nim='+nim)
	
	.then(function(result){
		$scope.data.nim = result.data[0].nim;
		$scope.data.nama = result.data[0].nama;
		$scope.data.jurusan = result.data[0].jurusan;

		console.log(result.data[0].nama);


	})
	


	$scope.updateData =function(data){
		// alert(User.nim);
		$ionicLoading.show();
		$http.post('http://localhost/AppMhs/updateData.php',{
			nim : data.nim,
			nama: data.nama,
			jur : data.jurusan

		}).then(function(result){
			console.log(result.data);
			$ionicLoading.hide();
			$state.go('menu');
		})
	}
})