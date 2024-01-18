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

const inputString = 'سوره فاتحة الکتاب، سوره فاتحة القرآن، سوره ام الکتاب، سوره ام القرآن، سوره سبع المثاني، سوره قرآن العظيم، سوره حمد، سوره صلاة(سوره نماز)، سوره شفاء، سوره شافيه، سوره رِقيّه، سوره اساس، سوره وافيه، سوره کافيه، سوره کنز، سوره شکر، سوره ثناء، سوره مناجات، سوره تفويض، سوره دعاء، سوره نور، سوره تعليم المسأله، سوره سؤال، سوره حمد أولی، سوره حمد قصری، سوره منت'

// Split the input string into an array using the comma as the delimiter
const stringArray = inputString.split('، ')

// Remove occurrences of "سوره" from the array
const filteredArray = stringArray.map(item => item.replace('سوره ', ''));

console.log(filteredArray)
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