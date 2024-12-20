import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from "@ngrx/store";
import {AuthActions} from "@core/auth/data-access/+state/auth.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly store = inject(Store);

  ngOnInit() {
    // this.store.dispatch(AuthActions.getUser())
  }
}
