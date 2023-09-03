import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

const sharedModule = [MatButtonModule, MatCardModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatInputModule],
  exports: [...sharedModule],
})
export class SharedModule {}
