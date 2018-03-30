import { Component, OnInit, Version } from '@angular/core';

@Component({
  selector: 'app-depot-operator',
  templateUrl: './depot-operator.component.html',
  styleUrls: ['./depot-operator.component.css']
})
export class DepotOperatorComponent implements OnInit {
    cameraStarted = false;
    qrResult: string;
    selectedDevice: any;
    availableDevices: object = [];
    ngOnInit() {}
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
    }

    onChange(selectedValue) {

        console.log('Selection changed: ', selectedValue);

        this.cameraStarted = false;
        this.selectedDevice = selectedValue;
        this.cameraStarted = true;
    }

}
