<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px">
    <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
    <defs>
      <marker
        id="arrow"
        markerWidth="10"
        markerHeight="10"
        refX="0"
        refY="3"
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L0,6 L9,3 z" fill="#000" />
      </marker>
    </defs>
    <line
      x1="150"
      y1="50"
      x2="200"
      y2="50"
      stroke="#000"
      stroke-width="5"
      marker-end="url(#arrow)"
    />
    <circle cx="300" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
  </svg>
</template>

<script>
export default {};
</script>

<style scoped>
</style>