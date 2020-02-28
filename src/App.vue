<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>

                <p v-highlight>Custom directive test</p>
                <p v-highlight-binding="'red'">pass value to directive </p>
                <p v-highlight-argument:background="'green'">pass argument value to directive </p>
                <p v-highlight-modifier:background.delayed="'pink'">pass modifier value to directive </p>
                <p v-local-highlight>local directive example </p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'local-highlight': {
          bind(el, binding, vNode) {
            el.style.background = 'cyan'
          }
        }
      }
    }
</script>

<style>

</style>
