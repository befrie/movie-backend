'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify')

module.exports = {
    lifecycles: {
    beforeCreate: async (movie) => {
        if (movie.titel) {
            movie.slug = slugify(movie.titel, {lower: true})
        }},
    beforeUpdate:  async (movie) => {
        if (movie.titel) {
            movie.slug = slugify(movie.titel, {lower: true})
        }},   
    }
};
