import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Staff } from 'src/app/modules/models/staff';
import { LoginService } from 'src/app/modules/services/login.service';
import Swal from 'sweetalert2';



import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  @Input()
  staff!: Staff;


  ngOnInit(): void {


    this.staff = JSON.parse(sessionStorage.getItem('connectedUser') || '{}');

  }















    
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date ;
  title = 'angular-idle-timeout';

  public modalRef!: BsModalRef;
  @ViewChild('childModal', { static: false })
  childModal!: ModalDirective;


  constructor(private loginService: LoginService, private router: Router,private idle: Idle, private keepalive: Keepalive, 
 private modalService: BsModalService) {

 
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5000000);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });
    
    idle.onTimeout.subscribe(() => {
      this.childModal.hide();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      this.router.navigate(['/']);
    });
    
    idle.onIdleStart.subscribe(() => {
        this.idleState = 'You\'ve gone idle!'
        console.log(this.idleState);
        this.childModal.show();
    
        console.log("strat called ")
    });
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.loginService.getUserLoggedIn().subscribe((userLoggedIn: any) => {
      if (userLoggedIn) {
        idle.watch()
        this.timedOut = false;
      } else {
        idle.stop();
      }
    })

    // this.reset();
  }

  reset() {
    this.idle.watch();
    //xthis.idleState = 'Started.';
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {

    this.childModal.hide();
    this.loginService.logout();
    this.router.navigate(['login']);
  }


}

