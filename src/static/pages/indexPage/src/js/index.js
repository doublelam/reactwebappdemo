'use strict';
$(function () {
  $('body').css({
    opacity: 1,
  });

  var checkInterval = window.setInterval(function () {
    console.log('interval', checkInterval);
    if (parent.window.isBlock) {
      $('body').html('<div class="no-people">尚未开通系统权限，如有工作需要，请联系系统管理员</div>');
      clearInterval(checkInterval);
      return;
    } else if (parent.window.isBlock === false) {
      clearInterval(checkInterval);
    }
  }, 10);

  var recentWeek12 = echarts.init(document.getElementById('recentWeek12'));
  var loadingFlow = echarts.init(document.getElementById('loadingFlow'));
  var time = 'day', area = 'region', quota = 'weAcceptordernum', lfTime = 'day';
  var areaMap = {
    acceptordernum: '（个）',
    shipordernum: '（个）',
    warehouseincrenum: '（个）',
    shippingfee: '（万元）',
    insteadfee: '（万元）',
    paymentamount: '（万元）',
    platformamount: '（万元）',
  };
  var unit = areaMap[quota];
  var PREFIX = '/skynet/home/';

  // 初始页面
  basic(PREFIX, time);
  top10(PREFIX, time, area, quota);
  lf(PREFIX, lfTime);

  // 基本数据按钮被点击事件
  $('.basicBtn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    time = $(this).val();
    quota = $('#selected').children('option:selected').val();
    basic(PREFIX, time);
    top10(PREFIX, time, area, quota);
  })

  // 传化网排名模块事件
  recentWeek12.showLoading();
  $('.top10Btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    area = $(this).val();
    quota = $('#selected').children('option:selected').val();
    unit = areaMap[quota];
    console.log(unit, areaMap, quota);
    top10(PREFIX, time, area, quota);
  })

  // 传化网运单流量统计模块事件
  loadingFlow.showLoading();
  $('.lfBtn').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    lfTime = $(this).val();
    lf(PREFIX, lfTime);
  })

  // select改变事件
  recentWeek12.showLoading();
  $('#selected').change(function () {
    quota = $(this).children('option:selected').val();
    unit = areaMap[quota];
    top10(PREFIX, time, area, quota);
  })


  // 传化网top10排名
  var recentWeekOption12 = {
    //color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{b}: {c}' + unit
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: [{
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        textStyle: {
          color: '#000',
          fontWeight: 300,
        }
      }
    }],
    xAxis: [{
      show: false
    }],
    series: [{
      name: '',
      type: 'bar',
      data: [],
      label: {
        normal: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#000'
          }
        }
      },
      itemStyle: {
        normal: {
          color: '#2db7f5'
        }
      },
    }]
  };

  recentWeek12.setOption(recentWeekOption12);

  //传化网运单流量统计
  var loadingFlowOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      containLabel: true
    },
    legend: {
      data: ['运费(万元)', '运单(个)']
    },
    xAxis: [{
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      data: []
    }],
    yAxis: [{
      type: 'value',
      name: '运单(个)',
      min: 0,
      max: 'dataMax',
      position: 'right'
    }, {
      type: 'value',
      name: '运费(万元)',
      min: 0,
      max: 'dataMax',
      position: 'left'
    }],
    series: [{
      name: '运单(个)',
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#2db7f5'
        }
      },
      lineStyle: {
        normal: {
          width: 3,
          shadowColor: 'rgba(0,0,0,0.4)',
          shadowBlur: 10,
          shadowOffsetY: 10
        }
      },
      data: []
    }, {
      name: '运费(万元)',
      type: 'line',
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: '#c23531'
        }
      },
      data: []
    }]
  };

  loadingFlow.setOption(loadingFlowOption);


  function basic(prefix, time) {
    $.ajax({
      type: 'get',
      url: prefix + time + '/baseQuery',
      success: function (data) {
        var res;
        try {
          res = JSON.parse(data);
        } catch (err) {
          console.log('json parse error:' + err);
        }
        if (res.redirect
          && typeof res.redirectUrl === "string"
          && /\&redirectUrl\=/.test(res.redirectUrl)
        ) {
          res.redirectUrl = res.redirectUrl
            .replace(/^(.+?redirectUrl=)(.*)$/, "$1" + window.location.href);

          window.location.href = res.redirectUrl;
          return true;
        }
        $('[data-type]').each(function (index, val) {
          var $this = $(this);
          $this.text(
            res.module[$this.attr('data-type')]
          );
        });

      }
    })
  }

  function top10(prefix, time, area, quota) {
    recentWeek12.showLoading();
    $.ajax({
      type: 'get',
      url: prefix + area + '/' + time + '/' + quota + '/rankingQuery',
      success: function (data) {
        var res;
        try {
          res = (typeof data === 'string') ? JSON.parse(data) : data;
          console.log('home res',res);
        } catch (err) {
          console.log('json parse error:' + err);
          return;
        }
        if (res.redirect
          && typeof res.redirectUrl === "string"
          && /\&redirectUrl\=/.test(res.redirectUrl)
        ) {
          res.redirectUrl = res.redirectUrl
            .replace(/^(.+?redirectUrl=)(.*)$/, "$1" + window.location.href);

          parent.window.location.href = res.redirectUrl;
          return true;
        }
        recentWeek12.hideLoading();
        var _data = res.module;
        var areaArr = [];
        var dataValueArr = [];
        for (var val of _data) {
          areaArr.push(val.area);
          dataValueArr.push(String(val.dataValue).replace(/\,/g, ''));
        }
        console.log('area,',areaArr,'dataval', dataValueArr);
        recentWeek12.setOption({
          tooltip: {
            formatter: '{b}: {c}' + unit
          },
          yAxis: {
            data: areaArr.reverse()
          },
          series: [{
            // 根据名字对应到相应的系列
            name: 'Top 10',
            data: dataValueArr.reverse()
          }]
        })
      }
    })
  }

  function lf(prefix, lfTime) {
    loadingFlow.showLoading();
    $.ajax({
      type: 'get',
      url: prefix + lfTime + '/flowQuery',
      success: function (data) {
        loadingFlow.hideLoading();
        var res;
        try {
          res = (typeof data === 'string') ? JSON.parse(data) : data;
        } catch (err) {
          console.log('json parse error:' + err);
          return;
        }
        if (res.redirect
          && typeof res.redirectUrl === "string"
          && /\&redirectUrl\=/.test(res.redirectUrl)
        ) {
          res.redirectUrl = res.redirectUrl
            .replace(/^(.+?redirectUrl=)(.*)$/, "$1" + window.location.href);

          parent.window.location.href = res.redirectUrl;
          return true;
        }
        var _data = res.module;
        var lfXtime = [];
        var weShippingfeeArr = [];
        var weShipordernumArr = [];
        for (var val of _data) {
          lfXtime.push(val.dataTime);
          weShippingfeeArr.push(String(val.weShippingfee).replace(/\,/g, ''));
          weShipordernumArr.push(val.weShipordernum);
        }
        loadingFlow.setOption({
          xAxis: {
            data: lfXtime
          },

          series: [{
            name: '运费(万元)',
            data: weShippingfeeArr
          }, {
            name: '运单(个)',
            data: weShipordernumArr
          }]
        })
      }
    })
  }

})