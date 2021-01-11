'use strict';

/* eslint no-console: 0 */

const path = require('path');
const pact = require('@pact-foundation/pact-node');
const config = require('config');
const git = require('git-rev-sync');

const opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), config.services.pact.pactDirectory)],
    pactBroker: config.services.pact.url,
    consumerVersion: git.short(),
    tags: config.services.pact.tag || 'Dev'
};

const certPath = path.resolve(__dirname, '../cer/ca-bundle.crt"');
process.env.SSL_CERT_FILE = certPath;

pact.publishPacts(opts)
    .then(() => {
        console.log('Pact contract publishing complete!');
    })
    .catch(e => {
        console.log('Pact contract publishing failed: ', e);

    });
