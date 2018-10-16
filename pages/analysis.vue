<template>
    <div class="analysis">
        <div id="chart">

        </div>
    </div>
</template>

<script>
    // import echarts from '../assets/echarts.min.js';
    import echarts from 'echarts/lib/echarts';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    // import 'echarts/lib/component/toolbox';
    // import 'echarts/lib/component/title';

    export default {
        name: 'analysis',
        data() {
            return {}
        },
        mounted() {
            let dom = document.getElementById("chart");
            let myChart = echarts.init(dom);
            let app = {};
            option = null;

            let d = [
                {
                    name: '阿飞正传',
                    play: '55500',
                    heart: '2435',
                    comment: '121',
                    share: '156',
                    date: '2018-10-09'
                },
                {
                    name: '功夫',
                    play: '25500',
                    heart: '1049',
                    comment: '142',
                    share: '45',
                    date: '2018-10-09'
                },
                {
                    name: '头文字D',
                    play: '16500',
                    heart: '345',
                    comment: '50',
                    share: '40',
                    date: '2018-10-09'
                },
                {
                    name: '东邪西毒',
                    play: '14500',
                    heart: '586',
                    comment: '36',
                    share: '20',
                    date: '2018-10-09'
                },
                {
                    name: 'monica',
                    play: '14500',
                    heart: '913',
                    comment: '56',
                    share: '59',
                    date: '2018-10-09'
                },
                {
                    name: '少林足球',
                    play: '21500',
                    heart: '502',
                    comment: '46',
                    share: '14',
                    date: '2018-10-09'
                },
                {
                    name: '泰迪熊',
                    play: '2722',
                    heart: '45',
                    comment: '14',
                    share: '2',
                    date: '2018-10-09'
                },
                {
                    name: '与神同行',
                    play: '14500',
                    heart: '350',
                    comment: '95',
                    share: '6',
                    date: '2018-10-09'
                },
                {
                    name: '王牌特工',
                    play: '13500',
                    heart: '94',
                    comment: '33',
                    share: '4',
                    date: '2018-10-09'
                },
                {
                    name: '绣春刀',
                    play: '10500',
                    heart: '213',
                    comment: '24',
                    share: '19',
                    date: '2018-10-09'
                },
                {
                    name: '头文字D_',
                    play: '5132',
                    heart: '86',
                    comment: '39',
                    share: '1',
                    date: '2018-10-09'
                },
                {
                    name: '超时空同居',
                    play: '17500',
                    heart: '383',
                    comment: '15',
                    share: '18',
                    date: '2018-10-09'
                },
            ]

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
                    data: ['播放量', '点赞', '评论', '分享', '点赞率', '评论率', '分享率']
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
                        name: '播放量',
                        type: 'bar',
                        data: d.map(i => i.play),
                    },
                    {
                        name: '点赞',
                        type: 'bar',
                        data: d.map(i => i.heart),
                    },
                    {
                        name: '评论',
                        type: 'bar',
                        data: d.map(i => i.comment),
                    },
                    {
                        name: '点赞率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: d.map(i => (i.heart / i.play * 100).toFixed(2))
                    },
                    {
                        name: '评论率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: d.map(i => (i.comment / i.play * 100).toFixed(2))
                    },
                    {
                        name: '分享率',
                        type: 'line',
                        yAxisIndex: 1,
                        data: d.map(i => (i.share / i.play * 100).toFixed(2))
                    },
                ]
            };
            if(option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        }
    }
</script>
<style scoped lang="scss">
    .analysis {

        #chart {
            width: 100%;
            height: 600px;
        }
    }
</style>
