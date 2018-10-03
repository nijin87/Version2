import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private router: Router
     ) { }

/*
   * Author: TSPL-T0446
   * Function: showLoader
   * Description:  Function to show thw spinner
   * Arguments: Nil
   * Return: Nil
  */
 public showLoader() {
    document.getElementById('nb-global-spinner').style.display = 'block';
  }

  /*
   * Author: TSPL-T0446
   * Function: hideLoader
   * Description:  Function to hide the spinner
   * Arguments: Nil
   * Return: Nil
  */
  public hideLoader() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

  /*
   * Author: TSPL-T0446
   * Function: navigateTo
   * Description:  Function to navigate to a page
   * Arguments: url : Array : url array to be navigated
   *            params : Array : Optional routing params
   * Return: Nil
  */
  public navigateTo(url: Array<string>, params?) {
    this.router.navigate(url);
  }
}
