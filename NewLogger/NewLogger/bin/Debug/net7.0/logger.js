const { config } = require('./logger.json');  // need to change this to pull from the app_parameter_store
const { format } = require('./logger.formatter');
const { transport } = require('./logger.transport');

const { logger } = require('')

class logger {
	constructor () {
		this.format = new format();
        this.transport = new transport();
	}

	#integerLevel(stringLevel) {
        switch(stringLevel) {
            case "error":
                return 0;
                break;
            case "warn":
                return 1;
                break;
            case "info":
                return 2;
                break;
            case "http":
                return 3;
                break;
            case "verbose":
                return 4;
                break;
            case "debug":
                return 5;
                break;
            default:
                /* always remember to set the default value here as a last backup to any
                   and all failures to confirm the logging level in the cofigurations
                */
                return 2; 
        }
    }
    
    /*
        The following functions are provided to allow for simple syntax for posting data to
        the log regardless of transport.
        The following defines the structure of the logData object
            logData - the complete object for the logData
            logData.timestamp - the timestamp for the log record from the component
            logData.host - the hostname
            logData.source - the source of the mata (function, component, overall service)
            logData.correlationid - the correlation ID for the transaction (and all children
                                    spawned through to the response to the originating requestor)
            logData.code - the return code for the record if one exists
            logData.message - the message summary text
            logData.http.request - the http request associated to the error (requires sanitizing
                                      and encrypting)
            logData.http.response - the http response assiciated to the error (requires sanitizing
                                       and encrypting)
            logData.trace - the javascript console.trace() results from the function where the
                               error occured
            logData.data - the object(s) in use by the function at the time of the error; this 
                              could include member, partner, agent data both as inputs or objects
                              being constructed as part of the response or as interim data used
                              for processing
    */

    async log(level, logData) {
		if (!level || !logData ) {
            exit;
            // write write bad request error to logger error log file
        }
        
        //if ( config?.)

        const reqLevel = this.#integerLevel(level);
		const configLevel = this.#integerLevel(configuredLevel);
		
		if (reqLevel <= configLevel) {
			try {
                this.#publish(config, level, logData);                
			} catch (err) {
				// write error to logger error log file
			}
		}
	}

    async error(logData) {
        if (!logData ) {
            exit;
            // write write bad request error to logger error log file
        }
        
        this.log('error',logData);
    }

    async warn(logData) {
        if (!logData ) {
            exit;
            // write write bad request error to logger error log file
        }
        
        this.log('warn',logData);
    }

    async info(logData) {
        if (!logData ) {
            exit;
            // write write bad request error to logger error log file
        }
        
        this.log('info',logData);
    }

    async http(logData) {
        if (!logData.http) {
            exit;
            // write write bad request error to logger error log file
        }
        
        this.log('http',logData);
    }

    async verbose(logData) {
        if (!logData) {
            exit;
            // write write bad request error to logger error log file
        }
        
        this.log('verbose',logData);
    }

    async debug(logData) {
        if (!logData.trace && !logData.data) {
            exit;
            // write write bad request error to logger error log file
        }
        
        this.log('debug',logData);
    }

    async #publish(config, level, logData) {
        if (config.transport.console === true) {
            this.transport.console(this.format.console(level,logData));
        }

        if (config.transport.file === true) {
            this.transport.file(this.format.file(level,logData));
        }

        if (config.transport.api === true) {
            this.transport.api(this.format.api(level,logData));
        }

        if (config.transport.db === true) {

        }
    } 
}
