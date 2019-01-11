import Hello from '../hello.vue'
import Vue from 'vue'

test('Says hello', () => {
    let cmp = new Vue(Hello).$mount()
    expect(cmp.thing).toBe('world')

    Vue.nextTick(() => {
        expect(cmp.$el.innerHTML).toMatch('Howdy, world')
    })
})
