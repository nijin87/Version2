import { Injectable } from '@angular/core';
import { GlobalService } from '../GlobalService/global.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
     private globalService: GlobalService
     ) { }
  /*
   * Author: TSPL-T0446
   * Function: isDeviceConnencted
   * Description:  Function to check whether device is conncnted
   * Arguments: Nil
   * Return: Status
  */
  isDeviceConnencted() {
    this.globalService.showLoader();
    setTimeout(() => {
      this.globalService.hideLoader();
    }, 3000);
  }
}
