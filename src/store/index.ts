import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: ['Фундаментальный анализ', 'Техническией анализ', 'Управление активами'],
    menu: [
      { title: 'Профиль', href: '#profile' },
      { title: 'Стейтмент', href: '#statement' },
      { title: 'Контакты', href: '#contact' },
      { title: 'Аналитика', href: '/analytics' }
    ],
    mainPage: true,
    email: 'Dmitry0112@mail.ru'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
