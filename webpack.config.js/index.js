module.exports = (env = 'development') => {
    if (process.env.NODE_ENV === 'production') {
        return require('./config.production');
    }

    if (env === 'production') {
        process.env.NODE_ENV = 'production';
    }

    return require(`./config.${env}`);
};
