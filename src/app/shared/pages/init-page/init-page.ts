import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../ui/components/hero/hero';

@Component({
  selector: 'app-init-page',
  imports: [Hero],
  templateUrl: './init-page.html',
  styleUrl: './init-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitPage {}
