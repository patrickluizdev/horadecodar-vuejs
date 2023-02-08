const MyNameApp = {
    data() {
        return{
            name: "Patrick",
            idade: "30",
            message: "Hello Vue",
            input_name: ""
        }
    },

    method: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.input_name)
        }
    
    }
}





Vue.createApp(MyNameApp).mount("#app");
