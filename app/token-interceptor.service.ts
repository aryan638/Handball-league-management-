import { Injectable, Injector } from '@angular/core';
import { RegistrationServiceService } from './service/registration-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req: any, next: any) {
    let regService = this.injector.get(RegistrationServiceService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${regService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
