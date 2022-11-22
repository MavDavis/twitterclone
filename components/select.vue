<template>
  <div>
    <select :class="width"
    class="">
        <option :value="name"></option>
    </select>
  </div>
</template>

<script>

export default {
props:['name', 'width'],
mounted(){
    let date = []
    for(let i = 0; i < 31; i++){
        date.push(i)
    }
    console.log(date)
}
}
</script>

<style>

</style>