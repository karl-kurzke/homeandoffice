angular.module('homeAndOfficeApp', [])
  .controller('JobProposalCtrl', function($scope){
    $scope.jobproposals = [
    	{
    		'name':'Mechaniker', 
    		'address':'Unicar'
    	}, 
    	{
    		'name':'Lebensmittelprofi', 
    		'address':'Unilever'
    	}, 
    	{
    		'name':'Web-Developer', 
    		'address':'Unister'
    	}
    ];
   })
  .directive('helloMaps', function () {
      return function (scope, elem, attrs) {
        var mapOptions,
          latitude = attrs.latitude,
          longitude = attrs.longitude,
          map;

        latitude = latitude && parseFloat(latitude, 10) || 43.074688;
        longitude = longitude && parseFloat(longitude, 10) || -89.384294;

        mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(latitude, longitude)
        };

        map = new google.maps.Map(elem[0], mapOptions);
        var image = 'images/maps_work_small.png';
        var marker = new google.maps.Marker({
     	 	position: new google.maps.LatLng(latitude, longitude),
      		map: map,
      		animation: google.maps.Animation.DROP,
      		icon: image,
      		title: 'work sample!'
  		});
  		var imagehome = 'images/maps_home_small.png';
  		var marker = new google.maps.Marker({
     	 	position: new google.maps.LatLng(latitude+0.1, longitude+0.1),
      		map: map,
      		animation: google.maps.Animation.DROP,
      		icon: imagehome,
      		title: 'flat sample!'
  		});
      };
    }); 
