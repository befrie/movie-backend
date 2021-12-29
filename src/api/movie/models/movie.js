'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify')

module.exports = {
    lifecycles: {
     beforeCreate: async(data) => {
        if (data.titel) {
            data.Slug = slugify(data.titel, {lower: true})
        } },
     beforeUpdate: async(data) => {
        if (data.titel) {
            data.Slug = slugify(data.titel, {lower: true})
        }},   
    }
};
