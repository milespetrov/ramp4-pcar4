<template>
    <div
        class="absolute top-0 left-0 z-50 flex flex-col items-stretch w-40 h-full pointer-events-auto appbar bg-black-75 sm:w-64"
        v-focus-list
    >
        <component
            v-for="(item, index) in items"
            :is="item.componentId"
            :key="`${item}-${index}`"
            class="my-4 text-gray-400 first:mt-8 hover:text-white"
            :class="{ 'h-48': item.id !== 'divider' }"
            :options="item.options"
        ></component>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { AppbarItemInstance } from './store';
import DividerV from './divider.vue';
import AppbarButtonV from './button.vue';

Vue.component('divider', DividerV);
Vue.component('appbar-button', AppbarButtonV);

@Component
export default class AppbarV extends Vue {
    @Get('appbar/visible') items!: AppbarItemInstance[];
}
</script>

<style lang="scss">
.appbar {
    backdrop-filter: blur(5px);
}
</style>
