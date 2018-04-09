<template functional>
  <transition-group v-bind="data.attrs" :class="data.staticClass" :style="data.staticStyle" tag="ul" name="slide">
    <slot />
  </transition-group>
</template>

<style>
.slide-move {
  transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>
