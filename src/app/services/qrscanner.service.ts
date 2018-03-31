import { Injectable, Version } from '@angular/core';

@Injectable()
export class QrscannerService {
    cameraStarted = false;
    qrResult: string;
    selectedDevice: any;
    availableDevices: object = [];
    config = {
      'private-key': 199,
      'gate-key': 2,
      'depot-op-key': 3,
      'quality-key': 5
    };
    complete = [];
    incomplete = [];
  constructor() {
    this.qrResult = '';
   }
  displayCameras(cameras: object[]) {

    console.log('Devices: ', cameras);

    this.availableDevices = cameras;

    if (cameras && cameras.length > 0) {
        this.selectedDevice = cameras[0];
        this.cameraStarted = true;
    }
}

handleQrCodeResult(result: string) {

  console.log('Result: ', result);
    this.qrResult = result;
    if (this.qrResult !== undefined ) {
      this.reset();
      this.taskList();
    }
}

onChange(selectedValue) {

    console.log('Selection changed: ', selectedValue);

    this.cameraStarted = false;
    this.selectedDevice = selectedValue;
    this.cameraStarted = true;
}

reset() {
    this.cameraStarted = false;
    this.availableDevices = [];
    console.log('resetted');
}
taskList() {
    this.complete = [];
    this.incomplete = [];
    const data = JSON.parse(this.qrResult);
    const prime = data['primeString'];
    console.log('in tasklist');
    for (const key in this.config ) {
      if (key === 'private-key') {
        continue;
      }
      if (prime % this.config[key] === 0) {
        this.complete.push(key);
      } else {
        this.incomplete.push(key);
      }
    }
    console.log('complete list:', this.complete);
    console.log('incomplete list:', this.incomplete);
}
}
