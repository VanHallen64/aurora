import feathers from '@feathersjs/client';
import rest from '@feathersjs/rest-client';
import * as settings from './settings.json';

const client = feathers();
const restClient = rest(settings.HOST);

client.configure(restClient.fetch(window.fetch));
client.configure(feathers.authentication({
    storage: window.localStorage
}));

export default client;