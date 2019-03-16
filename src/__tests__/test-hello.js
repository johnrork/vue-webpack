import Hello from '../hello.vue'
import Vue from 'vue'

test('Says hello', () => {
    let cmp = new Vue(Hello).$mount()
    expect(cmp.thing).toBe('world')
    expect(cmp.$el.innerHTML).toMatch('Howdy, world')
})


test('Changes on click', () => {
    let cmp = new Vue(Hello).$mount()
    cmp.$el.click()

    Vue.nextTick(() => expect(cmp.$el.innerHTML).toMatch('Howdy, john'))
})
