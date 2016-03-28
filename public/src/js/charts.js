Morris.Bar({
  element: 'bar-example',
  data: [
    { y: 'Mon', W1: 75,  W2: 65 },
    { y: 'Tue', W1: 50,  W2: 40 },
    { y: 'Wed', W1: 75,  W2: 65 },
    { y: 'Thu', W1: 50,  W2: 40 },
    { y: 'Fri', W1: 50,  W2: 40 }
  ],
  xkey: 'y',
  ykeys: ['W1', 'W2'],
  labels: ['Week 1', 'Week 2']
});
