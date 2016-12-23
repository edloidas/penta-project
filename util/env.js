const environment = process.env.NODE_ENV;
// Consider `development` by default
module.exports = environment === 'production';
