'use strict';

/**
 * descriptor router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::descriptor.descriptor');
