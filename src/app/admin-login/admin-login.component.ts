import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  state: string = '';
  error: any;

     constructor(public af: AngularFire,private router: Router) {
       this.af.auth.subscribe(auth => {
         if(auth) {
           this.router.navigateByUrl('/admin');
         }
       });
   }


   onSubmit(formData) {
     if(formData.valid) {
       this.af.auth.login({
         email: formData.value.email,
         password: formData.value.password
       },
       {
         provider: AuthProviders.Password,
         method: AuthMethods.Password,
       }).then(
         (success) => {
         this.router.navigate(['/admin']);
       }).catch(
         (err) => {
         this.error = err;
       })
     }
   }

   ngOnInit() {
   }



}
