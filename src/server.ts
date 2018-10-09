import app from './app';
import config from './configuration/config'

app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
});