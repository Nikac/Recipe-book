// import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';


// export class MyHttpInterceptor implements HttpInterceptor {
	
// 	intercept(req: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
	

// 		return next.handle(req).catch((error) => {
// 			if (error instanceof HttpErrorResponse) {
// 				console.log('This is error:' + error);
// 				if (error.status === 400) {
// 					console.log('City doesnt exist!!!');
// 				} 
// 			}
// 		});
// 	}
// }