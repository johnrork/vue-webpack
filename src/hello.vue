<template>
    <div class="greet">
        Hello {{thing}}
    </div>
</template>


<script>
    import './hello.css'

    export default {
        data(){
            return {thing: 'world'}
        }
    }
</script>

<style>
    .greet{
        font-weight: bold;
    }
</style>
