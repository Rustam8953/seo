var configd = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                41.7,
                30.90,
                18,
                4.4,
                3.6,
                0.7,
                0.4,
                0.3,
                0,
                0
            ],           
            backgroundColor: [
                '#6DAAF1',
                "#CEA7F4",
                "#C1F085",
                "#F0EC81",
                "#8590F9",
                "#78EFF6",
                "#58CE8F",
                "#F57B7B",
                "#F4C76F",
                "#FCAFE2"
            ],
            label: ''
        }],
        labels: [
            'Другое • 41.7%',
            'Рекомендации • 30.9%',
            'Раздел «Моя музыка» • 18%',
            'Поиск по музыке • 4.4%',
            'Музыка пользователей • 3.6%',
            'Сообщения • 0.7%',
            'Лента новостей • 0.4%',
            'Карточка музыканта • 0.3%',
            'Раздел  «Обзор»  • 0%',
            'Сообщества  • 0%'
        ],
    },
    options: {
        responsive: true,
        cutoutPercentage: 80, 
        legend: {
            display: false,
            labels: {
                boxWidth: 10,
                display: 'block',
                fontColor: '#252525',
                padding: 15,
            }
        },
        legendCallback: function (chart) {             
            // Return the HTML string here.
            console.log(chart.data.datasets);
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                text.push('<li><div class="box-color" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></div><span id="legend-' + i + '-item" style="background-color:' + + '"   onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                if (chart.data.labels[i]) {
                    text.push(chart.data.labels[i]);
                }
                text.push('</span></li>');
            }
            text.push('</ul>');
            return text.join("");
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label + ' - ' + data.labels[tooltipItem.index];
                    let datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return label + ': ' + datasetLabel.toLocaleString();
                }
            }
        },
    }
};

 var ctxd = document.getElementById('chart').getContext('2d');
    
    window.myDoughnut = new Chart(ctxd, configd);
    $("#do_legend").html(window.myDoughnut.generateLegend());

// Show/hide chart by click legend
updateDataset = function (e, datasetIndex) {    
    var index = datasetIndex;
    var ci = e.view.myDoughnut;
    var meta = ci.getDatasetMeta(0);    
    var result= (meta.data[datasetIndex].hidden == true) ? false : true;
    if(result==true)
    {
        meta.data[datasetIndex].hidden = true;
        $('#' + e.path[0].id).css("text-decoration", "line-through");
    }else{
        $('#' + e.path[0].id).css("text-decoration","");
        meta.data[datasetIndex].hidden = false;
    }
     
    ci.update();   
};

const paramCost = document.getElementById('param-cost');

noUiSlider.create(paramCost, {
    start: 45000,
    connect: 'lower',
    tooltips: true,
    step: 1000,
    range: {
        'min': 0,
        '50%': [50000, 1000],
        'max': 100000
    },
    format: wNumb({
        decimals: 0,
        thousand: ' ',
    })
})

const mobileBtn = document.querySelector('.header__mobile-btn');

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('mobile--stuck')
    document.querySelector('body').classList.toggle('body__menu_stuck')
    document.querySelector('.header__nav').classList.toggle('header__nav_active')
})