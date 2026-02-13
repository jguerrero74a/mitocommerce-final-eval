import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-init-page',
  imports: [],
  templateUrl: './init-page.html',
  styleUrl: './init-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitPage {}
