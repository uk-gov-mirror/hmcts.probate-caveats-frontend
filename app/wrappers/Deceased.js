'use strict';

const commonContent = require('app/resources/en/translation/common');

class Deceased {
    constructor(deceased) {
        this.deceased = deceased || {};
    }

    hasAlias() {
        return this.deceased.alias === commonContent.yes;
    }

}

module.exports = Deceased;
