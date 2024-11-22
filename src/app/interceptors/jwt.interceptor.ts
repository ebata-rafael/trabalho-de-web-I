import { AuthService } from './../service/auth.service';
import { inject } from '@angular/core';
import type { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const user = authService.getCurrentUserValue();
  if (!user || !user.access_token) {
    // informo que não é possivel enviar o token
    return next(req);
  }

  const modified = req.clone({
    setHeaders: {
      Authorization: `${user.token_type} ${user.access_token}`,
    },
  });
  return next(modified);
};
