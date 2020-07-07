var app = new Vue({
    el:'#app',
    data:{
        count:0,
        show:true
    },
    methods:{
        increment:function(){
            this.count+=1
        }
    }
})
