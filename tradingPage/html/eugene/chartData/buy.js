
// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#dddddd',
    axes: true,
    fillOpacity:.7,
    data: [
        {USD: '480$', Bid: 30, Ask: 0},
        {USD: '481$', Bid: 40, Ask: 0},
        {USD: '482$', Bid: 30, Ask: 0},
        {USD: '483$', Bid: 20, Ask: 0},
        {USD: '484$', Bid: 15, Ask: 0},
        {USD: '485$', Bid: 0, Ask: 0},
        {USD: '486$', Bid: 0, Ask: 0},
        {USD: '487$', Bid: 0, Ask: 10},
        {USD: '488$', Bid: 0, Ask: 25},
        {USD: '489$', Bid: 0, Ask: 18}
    ],
    lineColors:['#79D1CF','#E67A77','#79D1CF'],
    xkey: 'USD',
    ykeys: ['Bid', 'Ask'],
    labels: ['Bid', 'Ask'],
    pointSize: 0,
    lineWidth: 0,
    hideHover: 'auto'

});





