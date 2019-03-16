<template>
    <div class="greet" @click=click>
        Howdy, {{thing}}
    </div>
</template>


<script>
    import './hello.css'

    export default {
        data(){
            return {thing: 'world'}
        },
        methods: {
            click(){
                console.log("clicked")
                this.thing = 'john'
            }
        }
    }
</script>

<style>
    .greet{
        font-weight: bold;
    }
</style>
