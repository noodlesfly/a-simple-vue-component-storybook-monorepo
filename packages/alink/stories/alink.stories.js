import WzpAlink from '../src/alink.vue'

export default {
  title: 'WzpAlink',
  component: WzpAlink
}

export const Alink = _ => ({
  components: { WzpAlink },
  template: `
    <div>
      <wzp-alink :disabled="false"  href="www.baidu.com">百度</wzp-alink>
    </div>
  `
})