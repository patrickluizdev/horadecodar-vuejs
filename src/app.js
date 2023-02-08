const MyNameApp = {
    data() {
        return{
            name: "Patrick",
            idade: "30",
            message: "Hello Vue;"
        }
    }
}


Vue.createApp(MyNameApp).mount("#app");
