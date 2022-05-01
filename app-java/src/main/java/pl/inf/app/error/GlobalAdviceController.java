package pl.inf.app.error;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Custom exception converter to return response to user when a process exception occurred.
 */
@RestControllerAdvice
public class GlobalAdviceController {
    private static Logger logger = LoggerFactory.getLogger(GlobalAdviceController.class);

    /**
     * Convert exception to user response.
     *
     * @param exception The exception to convert
     * @return error response to user
     */
    @ExceptionHandler(ProcessException.class)
    public ResponseEntity<String> processException(final ProcessException exception) {
        final HttpStatus status = exception.getHttpStatus() != null ? exception.getHttpStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        logger.error(exception.toString());
        return ResponseEntity.status(status).body(exception.getErrorCode());
    }
}
