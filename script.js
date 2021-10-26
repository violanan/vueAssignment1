const bulbStatus = {
    data() {
        return {
            status: true,
        };
    },
    methods: {
        changeStatus() {
            this.status = !this.status;
        },
    },
};

Vue.createApp(bulbStatus).mount('#app');