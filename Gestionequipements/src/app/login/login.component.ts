import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { register } from '../model/register';
import { EquipementService } from '../services/equipement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private equipementservice: EquipementService, private router :Router) { }
  newRegister= new register (0,'','','')
  registers: register[] | undefined;

  ngOnInit(): void {
    this.register
  }
  register(){
  
    
  return this.equipementservice.register(this.newRegister).subscribe(res=>{this.registers=res
   
   
    }) 
    

  }
}
