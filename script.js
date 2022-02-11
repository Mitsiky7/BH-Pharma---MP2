// Déclaration des données 
// Configuration de l'apparence

const data = {
    labels: ['Un peu', 'Beaucoup', 'Passionnément', 'À la folie', 'Pas du tout'],
    datasets: [{
        label: 'Rongeurs',
        data: [1924354, 3168485, 1178189, 442532, 0],
        backgroundColor: 'rgba(241, 82, 86, 1)',
        borderColor: 'rgba(241, 82, 86, 1)',
    }, {
        label: 'Primates',
        data: [10605, 5367, 954, 309, 0],
        backgroundColor: 'rgba(22, 187, 217, 1)',
        borderColor: 'rgba(22, 187, 217, 1)',
    }, {
        label: 'Poissons',
        data: [1050635, 178630, 230646, 47289, 0],
        backgroundColor: 'rgba(255, 255, 0, 1)',
        borderColor: 'rgba(255, 255, 0, 1)',
    }, {
        label: 'Chiens',
        data: [11726, 7372, 1065, 490, 0],
        backgroundColor: 'rgba(89, 232, 79, 1)',
        borderColor: 'rgba(89, 232, 79, 1)',
    }, {
        label: 'Chats',
        data: [3145, 1234, 41, 42, 0],
        backgroundColor: 'rgba(153, 102, 255, 1)',
        borderColor: 'rgba(153, 102, 255, 1)',
    }, {
        label: 'Animaux de rente',
        data: [214075, 128845, 16990, 29765, 0],
        backgroundColor: 'rgba(255, 128, 0, 1)',
        borderColor: 'rgba(255, 128, 0, 1)',
    }, ]
};

// Configuration de la chart. 
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
// Affichage du document
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);