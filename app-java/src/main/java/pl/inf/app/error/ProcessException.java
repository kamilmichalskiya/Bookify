package pl.inf.app.error;

import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * Custom exception to convert to user response.
 */
@Getter
public class ProcessException extends RuntimeException {
    private final String errorCode;
    private final HttpStatus httpStatus;

    /**
     * Constructor with errorType and httpStatus
     *
     * @param errorType the type of error
     * @param status    error status
     */
    public ProcessException(ErrorType errorType, HttpStatus status) {
        super(errorType.getDescription());
        this.errorCode = errorType.getCode();
        this.httpStatus = status;
    }

    /**
     * Constructor with errorType
     *
     * @param errorType the type of error
     */
    public ProcessException(ErrorType errorType) {
        this(errorType, errorType.getDefaultStatus());
    }

}
