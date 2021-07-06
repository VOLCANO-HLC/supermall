<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -2px;
  background-color: #eee;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.3);
}
</style>