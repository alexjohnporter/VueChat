<template>
    <input v-model="user" @keyup.enter="setUser(user)" placeholder="Set User!" v-if="!loggedIn">
</template>

<script>
    export default {
        data() {
            return {
                user: null
            }
        },
        vuex: {
            getters: {
                loggedIn: function (state) {
                    return state.user;
                }
            }
        },
        methods: {
            setUser: function (user) {
                this.$store.dispatch('SET_USER', {'username': user});
            }
        }
    }
</script>