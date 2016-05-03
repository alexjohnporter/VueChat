<template>
    <div id="app">
        <user></user>
        <chat></chat>
    </div>
</template>

<script>
    import Chat from './components/Chat.vue'
    import User from './components/User.vue'

    export default {
        components: { Chat, User }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
