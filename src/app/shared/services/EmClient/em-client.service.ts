import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../../environments/environment';
import { DdsapGlobalDataService } from '../DDSAPGlobalData/ddsap-global-data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmClientService {

  constructor(private http: HttpClient, private ddsapGlobalData: DdsapGlobalDataService) { }

  private getUrlParams(objectName, methodName, body) {
    let data =
      "ObjName=" + objectName +
      "&MethodName=" + methodName +
      "&InParams=" + JSON.stringify({
        Data: JSON.stringify(body),
        TID: encodeURIComponent(this.ddsapGlobalData.global.tid)
      });
    return data;
  }

  public callServerAPI(objectName, methodName, body) {
    const options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8') };

    return this.http
      .post(`${environment.api_url}`, this.getUrlParams(objectName, methodName, body), options)
      .pipe(map(
        (data: any) => {
          if (data.ReturnValue && data.ReturnValue.ReturnValue) {
            data.ReturnValue = data.ReturnValue.ReturnValue;
          }
          if (typeof data.ReturnValue == 'string' && data.ReturnValue.startsWith('{"Data":')) {
            var tempDat = JSON.parse(data.ReturnValue);

            if (tempDat.TID) {
              // if (typeof (Storage) !== "undefined") {
              //   sessionStorage.setItem("_tid", tempDat.TID);
              // }              
              this.ddsapGlobalData.global.tid = tempDat.TID;
            }
            data.ReturnValue = JSON.parse(tempDat.Data);
          }
          return data.ReturnValue;
        },
        (err) => err.json()
      ));
  }

  /* get public ip address */

  getPublicIp() {
    this.http.get('https://jsonip.com')
      .subscribe(data => {
        let publicIP = data['ip'];
      });
  }
}
