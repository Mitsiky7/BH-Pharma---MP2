// On déclare les datas :
// le label + sa donnée
// On peut configurer aussi l'apparance

const data = {
    labels: ['Un peu', 'Beaucoup', 'Passionnément', 'À la folie', 'Pas du tout'],
    datasets: [{
        label: 'Rongeurs',
        data: [1924354, 3168485, 1178189, 442532, 0],
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
    }, {
        label: 'Primates',
        data: [10605, 5367, 954, 309, 0],
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
    }, {
        label: 'Poissons',
        data: [1050635, 178630, 230646, 47289, 0],
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderColor: 'rgba(255, 206, 86, 1)',
    }, {
        label: 'Chiens',
        data: [11726, 7372, 1065, 490, 0],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
    }, {
        label: 'Chats',
        data: [3145, 1234, 41, 42, 0],
        backgroundColor: 'rgba(153, 102, 255, 1)',
        borderColor: 'rgba(153, 102, 255, 1)',
    }, {
        label: 'Animaux de rente',
        data: [214075, 128845, 16990, 29765, 0],
        backgroundColor: 'rgba(255, 159, 64, 1)',
        borderColor: 'rgba(255, 159, 64, 1)',
    }, ]
};

// On configure notre chart
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            myScale: {
                type: 'logarithmic',
                position: 'left', // `axis` is determined by the position as `'y'`
            },
            x: {
                ticks: {
                    fontFamily: 'Roboto Mono',
                }
            },
        },

        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Roboto Mono',
                    }
                },
                position: 'top',
            },

            title: {
                display: false,
                text: "Nombre d'individus de chaque espèce en fonction de la sévérité des procédures",
            }
        }
    },
};
// On affiche le chart dans l'élément avec l'ID correspondant
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);