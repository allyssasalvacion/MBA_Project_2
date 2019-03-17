//doughnut-chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Correct", "Wrong"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5,5]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Overall Passing Rate'
      }
    }
});

$(document).ready(function () {
  var dt = $('#dataTable').DataTable();
  var qt = $('#questionTable').DataTable();
  var counter = 1;

   //table sample entry
    for(; counter<=10; counter++){
        qt.row.add( [
            counter,
            'question' + counter,
            50
        ]).draw(false);
        dt.row.add( [
                counter,
                'student ' + counter,
                'day ' + counter,
                20 + counter
            ] ).draw( false );
    }
        
    //if adding row
    $('#addRow').on( 'click', function () {
            dt.row.add( [
                counter,
                'student ' + counter,
                'day ' + counter,
                20 + counter
            ] ).draw( false );
 
            counter++;
    });
  $('.dataTables_length').addClass('bs-select');
});