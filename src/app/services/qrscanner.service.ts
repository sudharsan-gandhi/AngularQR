import { Injectable, Version } from '@angular/core';

@Injectable()
export class QrscannerService {
    cameraStarted = false;
    qrResult: string;
    selectedDevice: any;
    availableDevices: object = [];
  constructor() { }
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
  if (this.cameraStarted) {
    this.qrResult = result;
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

}
