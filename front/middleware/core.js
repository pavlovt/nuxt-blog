import chromelogger from 'chromelogger';

export default function (c) {
    chromelogger.middleware(c.req, c.res);
    c.log = chromelogger._log.bind(chromelogger, c.res, '');
    c.warn = chromelogger._log.bind(chromelogger, c.res, 'error');
}