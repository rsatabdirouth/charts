angular.module('mainApp')
.service('graphService',function($http){
    
    var service = this;
    service.getdata = getdata;
    
    function getdata()
    {
        
         return $http.get('http://localhost:9002/data.json');
    }
});