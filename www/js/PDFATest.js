//---------------------------------------------------------------------------------------
// Copyright (c) 2001-2019 by PDFTron Systems Inc. All Rights Reserved.
// Consult legal.txt regarding legal and license information.
//---------------------------------------------------------------------------------------
((exports) => {
  'use strict';

  exports.runPDFA = (file) => {
    const main = async() => {
      try {
        console.log('PDFA conversion test begins.');

        const inputURL = '../TestFiles/';
        const inputFilename = 'fish.pdf';
        const outputFilename = 'fish_pdfa.pdf';

        const convert = true;
        const pwd = '';
        let exceptions;
        const maxRefObjs = 10;
        
        console.log('Converting input document: ' + inputFilename);
        const pdfa = await PDFNet.PDFACompliance.createFromUrl(convert, file, pwd, PDFNet.PDFACompliance.Conformance.e_Level1B, exceptions, maxRefObjs);

        const errorCount = await pdfa.getErrorCount();
        if (errorCount === 0) {
          console.log(inputFilename + ' is a valid PDFA.');
        } else {
          console.log(inputFilename + ' is NOT a valid PDFA.');
        }

        console.log('Save and validate the converted document: ' + outputFilename);
        const linearize = true;
        const docBuffer = await pdfa.saveAsFromBuffer(linearize);
        console.log('docBuffer', docBuffer)
      } catch (err) {
        console.log(err);
      }
    };
    console.log('runWithCleanup');
    PDFNet.runWithCleanup(main(), 'demo:ps@innomobile.de:7586e93d013d1ad2a50ea93e43ff2ac068a1a63a4a3ca23789'); // replace with your own license key and remove the license-key.js script tag
  };
})(window);
// eslint-disable-next-line spaced-comment
//# sourceURL=PDFATest.js
