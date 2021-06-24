import Vue from 'vue'
import SlideContent from '../components/SlideContent.vue'
import SlideHeader from '../components/SlideHeader.vue'

export default function () {
  const components = {
    SlideContent,
    SlideHeader,
  }
  Object.entries(components).forEach(([name, c]) => {
    Vue.component(name, c)
  })
}
