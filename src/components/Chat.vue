<template>
    <h1>Hello World</h1>
    <input v-model="text" @keyup.enter="chat(text)" placeholder="Type here!">
    <button @click.prevent="chat(text)">Talk!</button>

    <p v-for="chat in chats">{{chat.message}} - {{chat.user.username}}</p>
</template>

<script>
    import Firebase from 'firebase'

    var chats = new Firebase('https://popping-torch-3416.firebaseio.com/chat/messages');

    export default {
        data() {
            return {
                text: '',
                baseUrl1: ''
            }
        },
        vuex: {
            getters:{
                user: function (state) {
                    return state.user;
                },
                baseUrl: function (state) {
                    return state.baseUrl;
                }
            }
        },
        firebase: {
            'chats':chats
        },
        methods: {
            chat: function (text) {
                new Firebase(this.baseUrl + '/chat/')
                        .child('messages')
                        .push({'user': this.user, 'message': text.trim()});
                this.text = '';
            }
        }
    }
</script>