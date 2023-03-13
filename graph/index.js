let xValues = [];
let yValues = [];

function graph(){

    var sem = document.getElementById('sem').value;
    var gpa = document.getElementById('gpa').value;
    
    xValues.push(sem);
    yValues.push(gpa);

    new Chart("graph", {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0)",
            borderColor: "rgba(143, 130, 255,1)",
            data: yValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Semester",
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "GPA",
                },
                ticks: {
                  min: 3.0,
                  max: 4,
                },
              }
            ],
          }
        }
      });
}

graph();