<script setup lang="ts">

import {ref} from "vue";

const visible = ref(false);

</script>

<template>
  <h2>Hello world</h2>

  <div class="flex">
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4">2</div>
    <div class="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
  </div>

  <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
    <Button type="button" label="Button 1"></Button>
    <Button type="button" label="Button 2" severity="secondary"></Button>
    <Button type="button" label="Button 3" severity="help"></Button>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="flex justify-content-center gap-4 wow">
    <Button label="Primary"/>
    <Button label="Secondary" severity="secondary" raised/>
    <Button label="Success" severity="success" text/>
    <Button label="Info" severity="info" raised/>
    <Button label="Warning" severity="warning" rounded/>
    <Button label="Help" severity="help"/>
    <Button label="Danger" severity="danger"/>
  </div>
  <div class="none-component">
    <h2 class="border-red-400">hello world</h2>
  </div>
  <div class="flex justify--center">
    <Button class="flex justify-center text-white">Click Me</Button>
  </div>
  <br>
  <br>


<!--  <div class="card flex justify-content-center">-->
<!--    <Button label="Show" icon="pi pi-external-link" @click="visible = true"/>-->

<!--    <Dialog v-model:visible="visible" modal header="Header" :pt="{-->
<!--            root: { class: 'w-12 sm:w-9 md:w-6' }-->
<!--    }">-->
<!--      <p>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore-->
<!--        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo-->
<!--        consequat.-->
<!--        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur-->
<!--        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--      </p>-->
<!--    </Dialog>-->
<!--  </div>-->
  <div>
    <div class="card flex justify-content-center">
      <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
      <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" :pt="{
                root: { class: 'w-12 sm:w-9 md:w-6' }
            }">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </div>
  </div>


  <br>
  <br>
  <PickList v-model="products" listStyle="height:342px" dataKey="id" breakpoint="1400px">
    <template #sourceheader> Available</template>
    <template #targetheader> Selected</template>
    <template #item="slotProps">
      <div class="flex flex-wrap p-2 align-items-center gap-3">
        <img class="w-4rem shadow-2 flex-shrink-0 border-round"
             :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image"
             :alt="slotProps.item.name"/>
        <div class="flex-1 flex flex-column gap-2">
          <span class="font-bold">{{ slotProps.item.name }}</span>
          <div class="flex align-items-center gap-2">
            <i class="pi pi-tag text-sm"></i>
            <span>{{ slotProps.item.category }}</span>
          </div>
        </div>
        <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
      </div>
    </template>
  </PickList>


  <div class="line-height-3">
    <div class="overflow-auto surface-overlay p-3 border-primary-500 border-2 border-round" style="height: 100px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </div>

  <Button label="Click Me" @click="handleClick"/>


  <div class="relative">
    <h2>hello worldddd</h2>
    <div class="static bg-primary-500 p-4 border-round text-gray-800" style="min-width: 300px; min-height: 150px;">
      <p class="font-bold text-gray-900">Static</p>
      <div class="absolute bottom-0 left-0 bg-primary border-round p-4 font-bold "
           style="min-width: 120px; min-height: 70px">
        Absolute
      </div>
    </div>
  </div>

  <div class="flex flex-row flex-wrap">
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">1
    </div>
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">2
    </div>
    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3
    </div>
  </div>

  <div class="flex flex-column">
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">1</div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">2</div>
    <div class="flex align-items-center justify-content-center h-4rem bg-primary font-bold border-round m-2">3</div>
  </div>

  <div class="flex flex-wrap" style="max-width: 500px">
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
         style="min-width: 200px; min-height: 100px">1
    </div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
         style="min-width: 200px; min-height: 100px">2
    </div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
         style="min-width: 200px; min-height: 100px">3
    </div>
  </div>


  <div class="flex">
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime
    </div>
    <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">Prime
      and PrimeFlex
    </div>
    <div class="flex align-items-center pt-3 justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
      Lorem ipsum dolor sit amet
    </div>
  </div>
  <div class="flex">
    <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
      Prime
    </div>
    <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
      Prime and PrimeFlex
    </div>
    <div class="flex-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">
      Lorem ipsum dolor sit amet
    </div>
  </div>
  <div class="field grid">
    <label for="firstname3" class="col-fixed" style="width:100px">Firstname</label>
    <div class="col">
      <input id="firstname3" type="text"
             class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary">
    </div>
  </div>
  <div class="field grid">
    <label for="lastname3" class="col-fixed" style="width:100px">Lastname</label>
    <div class="col">
      <input id="lastname3" type="text"
             class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary">
    </div>
  </div>

  <div class="flex flex-wrap justify-content-center">
    <div class="border-round w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
      border-round
    </div>
    <div
        class="border-round-left w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
      border-round-left
    </div>
  </div>
  <div class="flex flex-wrap justify-content-center">
    <div
        class="border-round-top w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
      border-round-top
    </div>
    <div
        class="border-round-bottom w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
      border-round-bottom
    </div>
    <div
        class="border-round-right w-12rem h-6rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
      border-round-right
    </div>
  </div>
  <p title="This is a paragraph">Paragraph text</p>
  <p title="This is another paragraph">Another paragraph</p>
</template>

<style scoped>

.aaa {
  @apply bg-green-800 p-3;
}

.wow {
  @apply bg-green-400;
}

.none-component {
  @apply bg-yellow-300 rounded-2xl my-2 p-3 border-2 border-red-500;
}
</style>
