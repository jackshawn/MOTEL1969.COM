<template>
    <div class="about">
        <p class="yet"><i class="icon-coming"></i></p>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {}
        },
    }
</script>
<style scoped lang="scss">
    .about {
        min-height: 500px;

        .yet {
            margin-top: 80px;
            text-align: center;

            &>i {
                font-size: 60px;
                color: #333;
            }
        }
    }
</style>
