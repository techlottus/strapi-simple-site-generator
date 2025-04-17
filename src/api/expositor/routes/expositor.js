'use strict';

/**
 * expositor router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::expositor.expositor');
