/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

async function onDeviceReady() {

    CoreControls.setWorkerPath('js/lib/core');
        console.log('DEVICE ....');
        // await PDFNet.initialize('demo:ps@innomobile.de:7586e93d013d1ad2a50ea93e43ff2ac068a1a63a4a3ca23789');
    console.log('..... READY');
    setTimeout(() => {
        const blob = new Blob(['This is my blob content'], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.runPDFA(url);
    }, 5000);



}

document.addEventListener("deviceready", onDeviceReady, false);

/*
setTimeout(async () => {
  await CoreControls.setWorkerPath('js/lib/core');
  await PDFNet.initialize(this.licenseKey);
  console.log('INIT PDFNET');
}, 5000);*/
