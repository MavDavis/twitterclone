<template>
  <div>
    <select :class="width"
    class="border">
        <option :value="name"></option>
    </select>
  </div>
</template>

<script>

export default {
props:['name', 'width'],
mounted(){
    console.log('hy');
    let date = []
    for(let i = 0; i < 31; i++){
        date.push(i)
        console.log(date, 5)
    }
}
}
</script>

<style>

</style>