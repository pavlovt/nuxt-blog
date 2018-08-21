import { Validator } from 'vee-validate';

// set default messages
Validator.dictionary.container.en.messages.required = (field) => `Please enter your ${field}.`

Validator.localize({
  en: {
    custom: {
      // the field name
      username: {
        // the rules
        required: "Please enter your e-mail or username.",
      }
    }
  }
});

Validator.extend('nospace', {
  getMessage: field => 'The field should not contain space',
  validate: value => !_.includes(value, ' ')
});