<script setup>
import { ref, computed } from 'vue'

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
]);

const showFilter = computed(() => {
    return cities.value.length > 3;
});
</script>
<template>
    <div>
        <div class="card flex justify-content-center">
            <MultiSelect v-model="selectedCities" :options="cities" :filter="showFilter" optionLabel="name"
                placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" />
        </div>
    </div>
</template>
<style scoped lang="">
    
</style>