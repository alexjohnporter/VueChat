<template>
    <h1>Hello World</h1>
    <input v-model="text" @keyup.enter="chat(text)" placeholder="Type here!">
    <button @click.prevent="chat(text)">Talk!</button>

    <p v-for="chat in chats">{{chat.text}} - {{chat.user}}</p>
</template>

<script>
    import Firebase from 'firebase'
    var firebase = new Firebase('https://popping-torch-3416.firebaseio.com/chat/');

    export default {
        data() {
            return {
                text: ''
            }
        },
        vuex: {
            getters:{
                user: function (state) {
                    return state.user;
                }
            }
        },
        firebase: {
            'chats': firebase
        },
        methods: {
            chat: function (text) {
                firebase.push({'user': this.user, 'text': text.trim()});
                this.text = '';
            }
        }
    }
</script>