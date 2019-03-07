'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const chromelogger = require('chromelogger');

class Log {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle (ctx, next) {
    chromelogger.middleware(ctx.req, ctx.res);
    ctx.log = chromelogger._log.bind(chromelogger, ctx.res, '');
    ctx.warn = chromelogger._log.bind(chromelogger, ctx.res, 'error');

    // call next to advance the request
    await next()
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ request, response }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = Log
