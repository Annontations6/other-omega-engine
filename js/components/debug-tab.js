Vue.component("debug-tab", {
    template: `<div class="guide-tab">
    <guide-item>
    <template v-slot:title>All buttons</template>
    <template v-slot:text>All buttons from debug menu items lol<br>` + mod.debugClasses[0].getButtons() + mod.debugClasses[1].getButtons() + `
    </template>
    </guide-item>
    ` + mod.debugClasses[0].getInfo() + 
    mod.debugClasses[1].getInfo() + `
</div>`
})