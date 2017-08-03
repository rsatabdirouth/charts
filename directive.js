angular.module('mainApp')


.directive('iGDonut', function () {
        return {
            restrict: 'E',
            scope: {
                data: "=",
                options: "="
                   },
            link :function(scope,ele,attr){
                console.log('scope is',scope);
                
                 renderChart();
                
                function renderChart(){
                    
                    
                    
              // Load the Visualization API and the corechart package.
                google.charts.load('current', {'packages': ['corechart']});

                // Set a callback to run when the Google Visualization API is loaded.
                google.charts.setOnLoadCallback(drawChart);
                    
                // Callback that creates and populates a data table,
                // instantiates the pie chart, passes in the data and
                // draws it.
                function drawChart() {

                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Topping');
                    data.addColumn('number', 'Slices');
                    data.addRows(scope.data);

                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(ele[0]);
                    chart.draw(data, scope.options);
                } 
                    
                    
                }
                scope.$watch(function(scope){return scope.options},
              function(n, o) {renderChart();}, true
              );

            }
        };
    })

    
    .directive('iGPie', function () {
        return {
            restrict: 'E',
            scope: {
                data: "=",
                options: "="
                   },
            link :function(scope,ele,attr){
                console.log('scope is',scope);
                
                 renderChart();
                
                function renderChart(){
                    
                    
                    
              // Load the Visualization API and the corechart package.
                google.charts.load('current', {'packages': ['corechart']});

                // Set a callback to run when the Google Visualization API is loaded.
                google.charts.setOnLoadCallback(drawChart);
                    
                // Callback that creates and populates a data table,
                // instantiates the pie chart, passes in the data and
                // draws it.
                function drawChart() {

                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Topping');
                    data.addColumn('number', 'Slices');
                    data.addRows(scope.data);

                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.PieChart(ele[0]);
                    chart.draw(data, scope.options);
                } 
                    
                    
                }
                scope.$watch(function(scope){return scope.options},
              function(n, o) {renderChart();}, true
              );

            }
        };
    });

