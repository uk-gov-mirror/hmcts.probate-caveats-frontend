'use strict';

const requireDirectory = require('require-directory');
const steps = requireDirectory(module);

module.exports = function () {

    return actor({

        // //Start application
        startApplication: steps.startPage.startPage,

        enterApplicantName: steps.applicant.name,

        enterApplicantEmail: steps.applicant.email,

        enterApplicantAddressManually: steps.applicant.address,

        enterDeceasedName: steps.deceased.name,

        enterDeceasedDateOfDeath: steps.deceased.dod,

        enterDeceasedDateOfBirthKnown: steps.deceased.dobknown,

        enterDeceasedDateOfBirth: steps.deceased.dob,

        enterDeceasedHasAlias: steps.deceased.alias,

        enterDeceasedOtherNames: steps.deceased.otherNames,

        enterDeceasedAddressKnown: steps.deceased.addressknown,

        enterDeceasedAddressManually: steps.deceased.address,

        seeSummaryPage: steps.summary.summary,

        // temp stop page to represent end of journey
        seeEndOfJourney: steps.endJourney.endJourney
    });
};
