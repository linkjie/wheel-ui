const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/component/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
      expect(Button).to.be.exist
    })
    it('可以设置type',()=>{
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
          propsData: {
            type: 'settings'
          }
        }).$mount() 
       
        expect(vm.$el.classList[1]).to.equal('settings')
    })
    
    it('可以设置icon.', () => {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#settings')
      vm.$destroy()
    })
    it('可以设置loading.', () => {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          loading: true
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loadding')
      vm.$destroy()
    })

  })