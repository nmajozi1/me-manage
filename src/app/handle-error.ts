import { throwError } from 'rxjs';

export class HandleError {
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessages: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
