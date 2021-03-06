window.onload = load;
/**
 * Loads both charts
 */
function load() {
  skillChart();
  devChart();
}

function skillChart() {
  Chart.defaults.global.defaultFontColor = "#FFF";
  new Chart(document.getElementById("myChart").getContext("2d"), {
    // The type of chart we want to create
    type: "radar",

    // The data for our dataset
    data: {
      labels: [
        "Leadership",
        "Business",
        "Agile & Scrum",
        "Service Delivery",
        "People & Culture",
        "Change",
      ],
      datasets: [
        {
          label: "Business Skills",
          backgroundColor: "rgba(249, 235, 36, 0.3)",
          borderColor: "#F9EB24",
          color: "#FFF",
          data: [9, 8, 6, 7, 8, 8],
        },
      ],
    },

    // Configuration options go here
    options: {
      repsponsive: true,
      aspectRatio: 1,
      legend: {
        display: true,
        labels: {
          // This more specific font property overrides the global property
          fontColor: "#FFF",
          fontSize: 16,
        },
      },
      scale: {
        gridLines: {
          display: true,
          color: "#FFF",
          circular: true,
        },
        angleLines: {
          display: true,
          color: "#FFF",
        },
        scaleLabel: {
          display: false,
        },
        pointLabels: {
          display: true,
          fontColor: "#F9EB24",
          fontSize: 14,
        },

        ticks: {
          backdropColor: "#5A5560",
          showLabelBackdrop: true,
          beginAtZero: true,
          fontSize: 14,
          fontColor: "#FFF",
          backdropPaddingY: 4,
          backdropPaddingX: 2,
          max: 10,
        },
      },
    },
  });
}
function devChart() {
  Chart.defaults.global.defaultFontColor = "#F9EB24";
  new Chart(document.getElementById("myChart2").getContext("2d"), {
    // The type of chart we want to create
    type: "horizontalBar",

    // The data for our dataset
    data: {
      labels: [
        "HTML5",
        "CSS",
        "Bootstrap4",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Git",
        "Jira",
      ],
      datasets: [
        {
          label: "Developer Skills",
          backgroundColor: "rgba(249, 235, 36, 0.3)",
          borderColor: "#F9EB24",
          data: [7, 7, 3, 7, 6, 5, 5, 6, 6],
          borderWidth: 2,
          barThickness: "flex",
        },
      ],
    },

    // Configuration options go here
    options: {
      repsponsive: true,
      aspectRatio: 1,
      legend: {
        display: true,
        labels: {
          // This more specific font property overrides the global property
          fontColor: "#FFF",
          fontSize: 16,
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              max: 10,
              min: 0,
              stepSize: 1,
              fontColor: "#FFF",
            },
            gridLines: {
              color: "#FFF", //give the needful color
              display: true,
            },
            scaleLabel: {
              fontColor: "#F9EB24",
              fontSize: 12,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "#FFF", //give the needful color
              display: true,
            },
          },
        ],
      },
    },
  });
}
