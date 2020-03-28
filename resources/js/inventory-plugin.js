'use strict';

var Regexp = require('markdown-it-regexp');

module.exports = (md, opts) => {
    md.use(Regexp(/\[#([0-9]+)\]/, function (match) {
        // Refator here to Vue router-link
        return "[<a href=\"" + window.config.base + "resources/" + opts.prefix + "/" + match[1] + "\" class=\"no-underline font-bold dim text-primary\" title=\"\">#" + match[1] + "</a>]";
    }));
}
