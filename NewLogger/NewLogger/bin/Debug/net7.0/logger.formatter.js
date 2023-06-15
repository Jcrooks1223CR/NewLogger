const configuredLevel = 'info';
const fs = require('fs');

class formatter {
	constructor () {
	}

	/*
        The following functions are provided to allow for simple syntax for posting data to
        the log regardless of transport.
        The following defines the structure of the logData object
            logData - the complete object for the logData
            logData.timestamp - the timestamp for the log record from the component
            logData.host - the hostname
            logData.source - the source of the mata (function, component, overall service)
            logData.correlationId - the correlation ID for the transaction (and all children
                                    spawned through to the response to the originating requestor)
            logData.code - the return code for the record if one exists
            logData.message - the message summary text
            logData.http.request - the http request associated to the error (requires sanitizing
                                   and encrypting)
            logData.http.request.headers - the http headers from the request
            logData.http.request.data - the http data from the request
            logData.http.response - the http response assiciated to the error (requires sanitizing
                                    and encrypting)
            logData.http.response.status - the http status from the response
            logData.http.response.headers - the http headers from the response
            logData.http.response.data - the http data from the response
            logData.trace - the javascript console.trace() results from the function where the
                               error occured
            logData.data - the object(s) in use by the function at the time of the error; this 
                              could include member, partner, agent data both as inputs or objects
                              being constructed as part of the response or as interim data used
                              for processing
    */

    async console(level, logData) {
        /*
            this function should define the format for a logMessage when published to the console.
            this format will be standard for all log publishing to the console as part of this
            solution.
        */
        if ( !level || !logData ) {
            // write logger error to default logger file
            exit;
        }

        const recordLevel = level;
        const { timestamp, host, source, correlationId, code, message, http, trace, data } = logData;
        const logMessage = '${timestamp} - ${recordLevel} - ${host} - ${source} - ${correlationId} - ${code} - ${message}';

        return logMessage;
    }

    async file(level, logData) {
        /*
            this function should define the format for a log Data when published to the console.
            this format will be standard for all log publishing to files as part of this
            solution.
        */
        if ( !level || !logData ) {
            // write logger error to default logger file
            exit;
        }

        const recordLevel = level;
        const { timestamp, host, source, correlationId, code, message, http, trace, data } = logData;
        const logMessage = '${timestamp} - ${recordLevel} - ${host} - ${source} - ${correlationId} - ${code} - ${message}';
        
        return logMessage;
    }

    async api(level, logData) {
        /*
            this function should define the format for a log Data when published to the console.
            this format will be standard for all log publishing an api as part of this
            solution.
        */
        if ( !level || !logData ) {
            // write logger error to default logger file
            exit;
        }

        const recordLevel = level;
        const { timestamp, host, source, correlationId, code, message, http, trace, data } = logData;

        let logMessage = `<error>
                              <parameter name="severity">${recordLevel}</parameter>
                              <parameter name="timestamp">${timestamp}</parameter>
                              <parameter name="host">${host}</parameter>
                              <parameter name="source">${service}</parameter>
                              <parameter name="message">${code} - ${message}</parameter>
                         `;

        if (    recordLevel === 'error'
             || recordLevel === 'warn'
             || recordLevel === 'info'
             || recordLevel === 'verbose'
           ) {
            const stacktrace = correlationId;
        } else if ( recordLevel === 'http') {
            if (http) {
                let stacktrace = '';
            
                if ( http?.request ) {
                    stacktrace += 'HTTP REQUEST';

                    if ( http?.request?.headers ) {
                        stacktrace += `\nHEADERS\n${http.request.headers}`;
                    } else {
                        stacktrace += '\nHEADERS\nnone';
                    }
                    
                    if ( http?.request?.data ) {
                        stacktrace += `\nDATA\n${http.request.headers}`;
                    } else {
                        stacktrace += '\nDATA\nnone';
                    }
                }

                if ( http?.response ) {
                    stacktrace += 'HTTP RESPONSE';
                    
                    if ( http?.reponse?.status ) {
                        stacktrace += `\nHEADERS\n${http.response.status}`;
                    } else {
                        stacktrace += '\nHEADERS\nnone';
                    }
                    
                    if ( http?.reponse?.headers ) {
                        stacktrace += `\nHEADERS\n${http.response.headers}`;
                    } else {
                        stacktrace += '\nHEADERS\nnone';
                    }
                    
                    if ( http?.response?.data ) {
                        stacktrace += `\nDATA\n${http.response.headers}`;
                    } else {
                        stacktrace += '\nDATA\nnone';
                    }
                }
            }
        } else if ( recordLevel === 'debug') {
            if (    trace 
                 || data
               ) {
                let stacktrace = '';

                if (trace) {
                    stacktrace += `TRACE\n${trace}`;
                } else {
                    stacktrace += 'TRACE\nnone';
                }

                if (data) {
                    stacktrace += `DATA\n${trace}`;
                } else {
                    stacktrace += 'DATA\nnone';
                }
            }
        }
        
        if (stacktrace) {
            logMessage += `<parameter name="stacktrace">${stacktrace}</parameter>`;
        }

        logMessage += '</error>';

        return logMessage;
    }

    async db(level, logData) {
        /*
            this function should define the format for a log Data when published to the console.
            this format will be standard for all log publishing to a database as part of this
            solution.
        */
        
        // not configured at this time - Michael Hebert - 2023-05-30
    
        if ( !level || !logData ) {
            // log logger error to default logger file
            exit;
        }
        
        return logMessage;
    }
}
