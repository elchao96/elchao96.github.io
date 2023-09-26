var comparisonChart = new Chart(document.getElementById("comparison"), {
    type: 'bar',
    data: {
        labels: ['Coffee Shops Visited', 'Artists Seen Live', 'Plane Rides Taken', 'Books Read'],
        datasets: [
            {
                label: '2019',
                data: [43, 24, 34, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                ],
                borderWidth: 1
            },
            {
                label: '2020',
                data: [11, 2, 5, 66],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var media2020Chart = new Chart(document.getElementById("media2020"), {
    type: 'bar',
    data: {
        labels: ['Books', 'Movies', 'TV Shows', 'Musicals', 'Albums', 'Podcasts', 'Shorts'],
        datasets: [{
            label: '# of Items',
            data: [53, 11, 9, 2, 37, 10, 1],
            backgroundColor: ['rgba(150, 34, 244, 0.3)'],
            borderColor: ['rgb(150, 34, 244)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var media2021Chart = new Chart(document.getElementById("media2021"), {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Books',
                data: [18, 8, 7, 2, 6, 2, 3, 3, 3, 0, 4, 5],
                backgroundColor: ['rgb(255, 99, 132)']
            },
            {
                label: 'Movies',
                data: [3, 4, 1, 1, 4, 0, 2, 2, 1, 1, 2, 4],
                backgroundColor: ['rgb(255, 159, 64)']
            },
            {
                label: 'TV Shows',
                data: [3, 1, 4, 0, 3, 1, 4, 1, 0, 2, 0, 1],
                backgroundColor: ['rgb(255, 205, 86)']
            },
            {
                label: 'Musicals',
                data: [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: ['rgb(75, 192, 192)']
            },
            {
                label: 'Albums',
                data: [26, 16, 10, 6, 4, 8, 6, 8, 4, 7, 7, 7],
                backgroundColor: ['rgb(54, 162, 235)']
            },
            {
                label: 'Podcasts',
                data: [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
                backgroundColor: ['rgb(153, 102, 255)']
            },
            {
                label: 'Shorts',
                data: [3, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 1],
                backgroundColor: ['rgb(201, 203, 207)']
            },
            {
                label: 'Soundtrack',
                data: [2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                backgroundColor: ['rgb(200, 99, 132)']
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var media2021OvereallChart = new Chart(document.getElementById("media2021Overall"), {
    type: 'bar',
    data: {
        labels: ['Books', 'Movies', 'TV Shows', 'Musicals', 'Albums', 'Podcasts', 'Shorts', 'Soundtracks'],
        datasets: [{
            label: '# of Items',
            data: [62, 25, 20, 4, 109, 3, 8, 5],
            backgroundColor: ['rgba(150, 34, 244, 0.3)'],
            borderColor: ['rgb(150, 34, 244)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});