<template>
    <panel-item :field="field">
        <template slot="value">
            <excerpt :content="excerpt" :should-show="field.shouldShow"/>
        </template>
    </panel-item>
</template>

<script>
    const plugin = require('../inventory-plugin');

    const md = require('markdown-it')({
        html: false,
        xhtmlOut: true,
        breaks: true,
        linkify: false,
        typographer: false,
    }).use(plugin, {prefix: 'inventories'})

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],

        computed: {
            excerpt() {
                return md.render(this.field.value || '')
            },
        },
    }
</script>
