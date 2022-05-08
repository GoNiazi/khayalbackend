'use strict';

/**
 * userfeedback service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::userfeedback.userfeedback');
