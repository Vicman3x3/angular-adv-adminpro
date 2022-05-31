import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription ;

  constructor() {
    // this.retornaObservable()
    // .pipe(
    //   retry()
    // )
    // .subscribe(
    //   valor => console.log('subs:',valor),
    //   err=> console.warn('Error:',err),
    //   () => console.info('Obs terminado')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(200).pipe(

      map((valor) => valor + 1),
      filter(valor => (valor %2 ===0 ) ? true:false ),
      // take(10)
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 15) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 5) {
          observer.error('i llego al valor de 15');
        }
      }, 1000);
    });
  }
}
