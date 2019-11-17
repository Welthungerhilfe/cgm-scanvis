import React, {Component} from 'react';

  class GenerateJsonObject extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.handleChange = this.handleChange.bind(this);
      this.createJsonObject = this.createJsonObject.bind(this);
    }
  
    // We are passed in the the data folder for one child (or maybe just QR code to be able to find the folder), creating an object and pass it back to App to be stored in state

    // MH_WHH_0123: {
    //   deeplinkPath: 'dir/filename',
    //   consentExists: false,
    //   consentLegible: false,
    //   isTestData: false,
    //   isValidated: false,
    //   pose: {
    //     standing: false,
    //     lying: true,
    //     notAvailable: false
    //   },
    //   angle: {
    //     front: true,
    //     back: true,
    //     '360': false,
    //   }
    // }

    handleChange(event) {
      // const { target: { name, value } } = event
      // this.setState({ [qrCode]: value, event: event })
      
      // Call function to set up object with QR code variable
      const fakeQr = 'MH_WHH_0123'
      this.createJsonObject(fakeQr)
      // When object is returned, send it back to App to set in State
  
      const tryRequire = (path) => {
        // Try to get files at a particular path, if there are none and path does not exist, returns null
        try {
          return require(`${path}`);
        } catch (err) {
          return null;
        }
      };
  
      const createJsonObject = (qrCode) => {
        newJsonObject = {};
  
        // Use qrCode to get data folder
        const dataFolder = tryRequire(`/server/data/${qrCode}`);
        if (dataFolder === null) {
          // TODO: should error out because the QR code is invalid or data can't be pulled
          return null
        } else {
          const consent = tryRequire(`${dataFolder}/consent/`);
          if (consent === null) {
            newJsonObject.consentExists=false;
          } else {
            // else: open that folder & display link for DS - is legible ? (click Y / N)  if no, is noncompliant ? )
            newJsonObject.consentExists = true;
            // TODO: link to QR so they can check if legible
          }

          const measurements = tryRequire(`${dataFolder}/measurements/`);
          if (measurements === null) {
            return null
            // TODO: should error out because there are no measurements
          } else {
            newJsonObject.scan_timestamp = '1542697960758';
            // newJsonObject.timestamp = measurements;
            // TODO: Use above to set timestamp to actual file name inside measurements folder

            // TODO: after timestamp, get the 3 digit code (ex. 104)
            // TODO: check all files and make a set of the codes(no repeats)
            // TODO: use codes to populate the json(standing, front, 360, old, etc)
            // TODO: have DS check it over final review and click ‘save’ (push to DB or save to PC with QR code in the format)
            // TODO: let DS enter some kind of information that is not captured with this json ? save as string and stick in there as ‘other’?
          } 
        }
  
        
  
  
        return (qrCode, newJsonObject);
      };
    }

  // render() {  
  //   return (
  //   );
    // }
  }


export default GenerateJsonObject;
