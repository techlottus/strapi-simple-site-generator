'use strict';

/**
 * expositor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::expositor.expositor');
