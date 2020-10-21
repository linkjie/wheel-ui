import Message from './toast'

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

const Toast = {}

Toast.install=function(Vue){
    Vue.prototype.$toast = function(message){
       
        createToast(Vue,message)  
    }
}


export { Toast }