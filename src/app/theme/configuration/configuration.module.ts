import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import {ConfigurationRoutingModule} from './configuration-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule,
    ColorPickerModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule { }
