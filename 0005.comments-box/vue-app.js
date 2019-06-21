let app = new Vue({
    el:'#app',
    data:{
        comments:[],
        comment: ''
    },
    methods:{
        submitComment: function(){
            // Do not add a blank comment
            if( !this.comment) return;
            this.comments.unshift(this.comment)
            this.comment = ''
        }
    }
})