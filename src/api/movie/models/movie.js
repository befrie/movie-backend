'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify')

module.exports = {
    lifecycles: {
     async beforeCreate(movie) {
        if (movie.titel) {
            movie.slug = slugify(movie.titel, {lower: true})
        } },
     async beforeUpdate(movie) {
        if (movie.titel) {
            movie.slug = slugify(movie.titel, {lower: true})
        }},   
    }
};
