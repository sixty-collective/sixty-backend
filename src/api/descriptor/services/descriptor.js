'use strict';

/**
 * descriptor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::descriptor.descriptor');
