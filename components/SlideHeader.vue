<template>
  <div style="flex: none;">
    <p class="font-slab-1 mb-8 blue-grey--text">
      <strong>{{ section }}</strong>
    </p>
    <h1 class="font-slab-1" style="font-size: 2rem;">
      <strong>{{ title }}</strong>
    </h1>
    <h2 class="font-slab-1" style="font-size: 1.5rem;">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['section', 'title', 'subtitle'],
}
</script>
