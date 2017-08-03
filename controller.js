angular.module('mainApp')
.controller('mainCtrl',function(graphService){
    var vm = this;
    vm.title= "ilds sales DashBoard";
    vm.pieData;
    vm.donutData;
    vm.revenueData;
    vm.colData;
    vm.yieldData;
    vm.MortgageSplit;
    
     vm.yieldDataOptions={'title':'Yield',
                       'width':400,
                       'height':300,
                   
                   //is3D: true,
                  };
    
    vm.pieOptions={'title':'Lead Types',
                       'width':400,
                       'height':300,
                   
                   is3D: true,
                  };
   
     vm.donutOptions={'title':'Buyer Return',
                       'width':400,
                       'height':300,
                    pieHole: 0.4,
                  
                  };
    
    
    activate();
   function activate(){
       graphService.getdata().then(function(res){
           vm.pieData=res.data.pieData;
          
           vm.donutData=res.data.donutData;
          vm.yieldData= res.data.yieldData;
          
           
           
           console.log('bar data is',vm.revenuedata);
           console.log('pie data is',vm.pieData);
           console.log('donut data is',vm.donutData);
       
       })
       
   }
});