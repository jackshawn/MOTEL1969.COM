<template>
    <div class="about">
        <p class="yet"><Icon icon="coming"></Icon></p>
    </div>
</template>

<script>
    import Icon from '~/components/Icon'
    export default {
        name: 'about',
        components: {
            Icon
        },
        data() {
            return {}
        },
    }
</script>
<style scoped lang="scss">
    .about {
        .yet {
            margin-top: 80px;
            text-align: center;

            &>svg {
                width: 60px;
                height: 60px;
            }
        }
    }
</style>
