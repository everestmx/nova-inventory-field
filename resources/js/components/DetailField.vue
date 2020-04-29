<template>
    <panel-item :field="field">
        <template slot="value">
            <excerpt :content="excerpt" :should-show="field.shouldShow"/>
        </template>
    </panel-item>
</template>

<script>
    const inventory = require('../inventory-plugin');

    const md = require('markdown-it')({
        html: false,
        breaks: true,
        linkify: true,
        typographer: false,
    }).use(inventory, {prefix: 'inventories'});

    md.linkify.tlds(require('tlds'));
    md.linkify.set({fuzzyIP: false});
    md.linkify.set({fuzzyEmail: false});

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],

        computed: {
            excerpt() {
                return md.render(this.field.value || '')
            },
        },
    }
</script>
