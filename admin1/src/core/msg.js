import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

export class Notify {
    constructor() {
        this.alertify = alertify;
        // change the log template if needed
        /*alertify
        .setLogTemplate(function (input) {
            return input;
        });*/
        alertify.set('notifier', 'position', 'top-center');
        alertify.set('notifier', 'delay', 1000);
        // alertify.defaults.glossary.title = '';
    }

    info(msg, placeholderArgs) {
        // alertify.success(this.t.instant(msg, placeholderArgs));
        var message = alertify.success(msg);
        message.delay(3);
    }

    error(msg, placeholderArgs) {
        // alertify.error(this.t.instant(msg, placeholderArgs));

        var message = alertify.error(msg);
        $('body').one('click', function(){
            message.dismiss();
        });
    }

    confirm(msg, title = '', okFn, cancelFn = null, placeholderArgs) {
        // confirm dialog
        alertify.defaults.glossary.title = title;
        // alertify.confirm(this.t.instant(msg, placeholderArgs), okFn, cancelFn);        
    }
}

export default new Notify();