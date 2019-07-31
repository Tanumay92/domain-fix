'use strict';

const url = require('url');

const strictToSingleDomain = (domainName,request) => {
    if(request.headers.ref) {
        const ref = request.headers.ref,
              u = url.parse(ref);
        
        let hostNameSplit = u.host.split('.');
        let commonDomain = hostNameSplit[hostNameSplit.length - 2] + '.' + hostNameSplit[hostNameSplit.length - 1]; 
        if(commonDomain === domainName) {
           return true;
        } else {
            console.error('Unknown domain!');
            return false;
        }   

    } else {
        console.error('No Refs can be found on the request.')
        return false;
    }
};

const strictToMultipleDomain = (domainList,request) => {
    if(request.headers.ref) {
        const ref = request.headers.ref,
        u = url.parse(ref);
        let hostNameSplit = u.host.split('.');
        let commonDomain = hostNameSplit[hostNameSplit.length - 2] + '.' + hostNameSplit[hostNameSplit.length - 1]; 
        for(let x = 0; x < domainList.length; x++) {
            if(commonDomain === domainList[x]){
                return true;
                break;
            } else {
              if(x === domainList.length -1){
                console.error(commonDomain,' blocked!');
                return false;
              }
            }
        }
    } else {
             console.error('No Refs can be found on request');
             return false;
    } 
}

module.exports = {
    strictToSingleDomain,
    strictToMultipleDomain
}
