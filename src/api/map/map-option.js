export default {
  tooltip: {
    trigger: 'item'
  },
  dataRange: {
    min: 0,
    max: 2500,
    x: 'left',
    y: 'bottom',
    text: ['高', '低'],
    calculable: true,
    inRange: {
      color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
    }
  },
  roamController: {
    show: true,
    x: 'center',
    mapTypeControl: {
      'china': true
    }
  },
  series: [
    {
      name: '种植基地',
      type: 'map',
      mapType: 'china',
      roam: true,
      itemStyle: {
        normal: {label: {show: true}},
        emphasis: {label: {show: true}}
      },
      data: [
        {name: '甘肃', value: 32}
      ]
    }
  ]
}
