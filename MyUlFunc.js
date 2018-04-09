import './MyUlFunc.css'

export default {
  functional: true,
  render(h, context) {
    const data = {
      ...context.data,
      props: {
       ...context.props,
        tag: 'ul',
        name: 'slide'
      }
    }
    return h('transition-group', data, context.children)
  }
}
