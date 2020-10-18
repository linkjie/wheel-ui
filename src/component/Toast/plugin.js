import Message from './message'

function createToast(Vue,message){
    if(typeof message === 'string'){
        message =  {message}
    }
    const Constructor = Vue.extend(Message)
    const vm = new Constructor({
        propsData:{
            ...message
        }
    })
    vm.$mount()
    document.body.append(vm.$el)
   
}


Message.install=function(Vue){
    Vue.prototype.$messages = function(message){
       
        createToast(Vue,message)  
    }
}


export default Message