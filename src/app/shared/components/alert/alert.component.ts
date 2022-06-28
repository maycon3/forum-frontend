import { Component, Input } from "@angular/core";
import { Alert, AlertType } from "./alert";
import { AlertService } from "./alert.service";

@Component({
  selector: 'app-alert',
  templateUrl:'./alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.getAlert()
      .subscribe(alert => {
        if(!alert) {
          this.alerts = [];
          return;
        }
        this.alerts.push(alert);
        setTimeout(()=> this.removeAlert(alert), this.timeout);
      });
  }

  getAlertClasse(alert: Alert) {
    if(!alert) return '';

    switch(alert.alertType) {
      case AlertType.SUCCESS:
        return 'alert alert-success';
      case AlertType.DANGER:
        return 'alert alert-danger';
    }
  }

  private removeAlert(alertRemove:Alert): void {
    this.alerts = this.alerts.filter(alert => alert != alertRemove);
  }
}
