'use strict';

const submitData = require('app/components/submit-data');
const fullcaveatform = require('test/data/unit/fullcaveatform.json');
const minimalcaveatform = require('test/data/unit/minimalcaveatform.json');
const expect = require('chai').expect;

describe('submitData/index.js', () => {
    describe('correct form created for full details', () => {
        const ctx = {};
        const formdata ={
            applicant: {
                'firstName': 'Jason',
                'lastName': 'Smith',
                'email': 'blah@gmail.com',
                'addressFound': 'none',
                'address': {
                    'addressLine1': 'dddd'
                }
            },
            applicationId: 'zq1675whyui',
            ccdCase: {
                'id': 1535574519543819,
                'state': 'CaseCreated'
            },
            deceased: {
                'firstName': 'Mike',
                'lastName': 'Samuels',
                'dod_day': 20,
                'dod_month': 11,
                'dod_year': 2018,
                'dod_date': '2018-11-20T00:00:00.000Z',
                'dod_formattedDate': '20 November 2018',
                'dobknown': 'Yes',
                'dob_date': '1977-01-01T00:00:00.000Z',
                'alias': 'Yes',
                'deceasedName': 'Mike Samuels',
                'addressknown': 'Yes',
                'address': {
                    'addressLine1': 'ffff'
                },
                'otherNames': {
                    'name_0': {
                        'firstName': 'King',
                        'lastName': 'North'
                    }
                }
            },
            payment: {
                'total': 20
            },
            registry: {
                'name': 'Birmingham'
            }
        };

        it('should return the correct formated form', (done) => {
            const body = submitData(ctx, formdata);
            expect(fullcaveatform).to.deep.eq(body);
            done();
        });
    });

    describe('correct form created for minimal details', () => {
        const ctx = {};
        const formdata ={
            applicant: {
                'firstName': 'Jason',
                'lastName': 'Smith',
                'email': 'blah@gmail.com',
                'address': {
                    'addressLine1': 'aaaa'
                }
            },
            applicationId: 'zq1675whyui',
            deceased: {
                'firstName': 'Mike',
                'lastName': 'Samuels',
                'dod_day': 20,
                'dod_month': 11,
                'dod_year': 2018,
                'dod_date': '2018-11-20T00:00:00.000Z',
                'dod_formattedDate': '20 November 2018',
                'dobknown': 'No',
                'alias': 'No',
                'deceasedName': 'Mike Samuels',
                'address': {
                    'addressLine1': 'dddd'
                },
            },
            payment: {
                'amount': 20
            },
            registry: {
                'name': 'Birmingham'
            }
        };

        it('should return the correct formated form', (done) => {
            const body = submitData(ctx, formdata);
            expect(minimalcaveatform).to.deep.eq(body);
            done();
        });
    });
});
