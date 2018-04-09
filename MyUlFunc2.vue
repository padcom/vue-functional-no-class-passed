<script>
export default {
  functional: true,
  render: (h, { data, children }) => (
    <transition-group { ...data } tag="ul" name="slide">
      { children }
    </transition-group>
  )
}
</script>

<style>
.slide-move {
  transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>
