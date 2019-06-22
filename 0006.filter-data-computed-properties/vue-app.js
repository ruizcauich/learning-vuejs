let app = new Vue({
    el:'#app',
    data:{
        // Users list
        users: [],
        // to holds the input value
        username: ''
    },
    methods:{
        // Called by the button to get the users list
        getUsers: function(){
            var url = 'https://jsonplaceholder.typicode.com/users'
            axios.get(url).then( response=>{
                this.users = response.data
            }).catch( error=>{
                console.log(error)
            })
        }
    },
    // Computet propertuies alloes us to mantain our html simple and declarative
    // hidding any complex logic or process in a function that represents a getter
    // funtcion, so you can access the computed data (that depends of other data) like
    // a variable declared in the data section
    computed:{
        // computed property/ getter function that returns any
        // user whose name match with the username property
        searchUser: function(){
            // Executes a filter method of the array/list
            return this.users.filter((user)=>{
                // Any string to lower case, return Frue/False if 
                // user.name includes the string provided trough the input/username
                return user.name.toLowerCase().includes(this.username.toLowerCase())
            })
        }
    }
})