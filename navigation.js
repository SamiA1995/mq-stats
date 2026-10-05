var alerts_navigation = document.getElementById('alerts_navigation');
var database_navigation = document.getElementById('database_navigation');
var monitoring_navigation = document.getElementById('monitoring_navigation');
var statistics_navigation = document.getElementById('statistics_navigation');
var my_chart = document.getElementById('my_chart');
var database_table = document.getElementById('database_table');

function showDatabase(e) {
    e.preventDefault();
    my_chart.style.display = 'none';
    database_table.style.display = 'block';
}
database_navigation.addEventListener('click', function(e) {
    showDatabase(e);
}, false);

function showMonitoring(e) {
    e.preventDefault();
    my_chart.style.display = 'block';
    database_table.style.display = 'none';
}
monitoring_navigation.addEventListener('click', function(e) {
    showMonitoring(e);
}, false);