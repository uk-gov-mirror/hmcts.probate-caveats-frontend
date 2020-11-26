'use strict';

const commonContentEn = require('app/resources/en/translation/common');
const commonContentCy = require('app/resources/cy/translation/common');
const pageUnderTest = require('app/steps/ui/deceased/alias/index');

async function enterDeceasedHasAlias(language) {

    const commonContent = language === 'en' ? commonContentEn : commonContentCy;
    const I = this;

    I.seeInCurrentUrl(pageUnderTest.getUrl());
    // I.click(`#alias-option${answer}`);
    await I.navByClick('#optionYes');
    await I.navByClick(commonContent.saveAndContinue);
}

module.exports = {enterDeceasedHasAlias};
