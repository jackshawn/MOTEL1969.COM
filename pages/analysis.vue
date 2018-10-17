<template>
    <div class="analysis">
        <div id="chart">
            <p class="loading">加载中...</p>
        </div>
    </div>
</template>

<script>
    import d from '~/assets/count';

    export default {
        head: {
            script: [
                {src: 'http://www.echartsjs.com/gallery/vendors/echarts/echarts.min.js'},
            ],
        },
        name: 'analysis',
        data() {
            return {}
        },
        mounted() {
            if(!window.echarts) {
                window.location.reload();
            } else {
                let dom = document.getElementById("chart");
                let myChart = window.echarts.init(dom);
                let app = {};

                let option = {
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: 80
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        backgroundColor: '#fff',
                        extraCssText: 'box-shadow: 2px 2px 4px #999;border-radius: 2px;padding: 8px 15px 5px 10px;',
                        textStyle: {
                            color: '#333'
                        }
//                    formatter: '{b0}: {c0}<br />{b1}: {c1}'
                    },
                    // toolbox: {
                    //     feature: {
                    //         dataView: {show: true, readOnly: false},
                    //         magicType: {show: true, type: ['line', 'bar']},
                    //         restore: {show: true},
                    //         saveAsImage: {show: true}
                    //     },
                    //     right: '6%'
                    // },
                    legend: {
                        data: ['点赞', '评论', '分享', '点赞率', '评论率', '分享率', '播放量']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: d.map(i => i.name),
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel: {
                                rotate: 45
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '数量',
                        },
                        {
                            type: 'value',
                            name: '比率',
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [

                        {
                            name: '点赞',
                            type: 'bar',
                            stack: '反馈',
                            data: d.map(i => i.heart),
                        },
                        {
                            name: '评论',
                            type: 'bar',
                            stack: '反馈',
                            data: d.map(i => i.comment),
                        },
                        {
                            name: '分享',
                            type: 'bar',
                            stack: '反馈',
                            data: d.map(i => i.share),
                        },

                        {
                            name: '点赞率',
                            type: 'line',
                            yAxisIndex: 1,
                            data: d.map(i => (i.heart / i.play * 100).toFixed(2)),
                            smooth: true
                        },
                        {
                            name: '评论率',
                            type: 'line',
                            yAxisIndex: 1,
                            data: d.map(i => (i.comment / i.play * 100).toFixed(2)),
                            smooth: true
                        },
                        {
                            name: '分享率',
                            type: 'line',
                            yAxisIndex: 1,
                            data: d.map(i => (i.share / i.play * 100).toFixed(2)),
                            smooth: true
                        },
//                    {
//                        name: '播放量',
//                        type: 'line',
//                        data: d.map(i => i.play / 10),
//                    },
                    ]
                };
                if(option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            }


        }
    }
</script>
<style scoped lang="scss">
    .analysis {

        #chart {
            width: 100%;
            height: 600px;

            p.loading {
                margin-top: 80px;
                text-align: center;
            }
        }
    }
</style>
