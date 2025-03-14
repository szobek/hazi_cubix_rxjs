import {  Observable, Subject,map,filter } from 'rxjs';

const observable1 = new Observable<number>((observer)=>{
  let counter:number=1
  const interval=   setInterval(()=>{
    observer.next(counter)
    if(counter===5) {
      observer.error()
      clearInterval(interval)
    } else counter++
    
  },500)
}).pipe(
  map(v=>v+2),
  // filter(v=>v%2===0)
)
const observableSujbect=new Subject()
observable1.subscribe(observableSujbect)

observableSujbect.subscribe({
  next:(val)=>console.log(val),
  error:()=>console.error('Hiba van')
})

observableSujbect.subscribe({
  next:(val)=>console.log(val),
  error:()=>console.error('Hiba van')
})