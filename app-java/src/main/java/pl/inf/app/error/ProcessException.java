package pl.inf.app.error;

import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * Custom exception to convert to user response.
 */
@Getter
public class ProcessException extends RuntimeException {
    private final ErrorType errorType;
    private final HttpStatus httpStatus;
    private final Object[] params;

    /**
     * Constructor with errorType and httpStatus
     *
     * @param status    error status
     * @param errorType the type of error
     * @param params    arguments to fill descriptions
     */
    public ProcessException(final HttpStatus status, final ErrorType errorType, final Object... params) {
        super(errorType.getCode());
        this.errorType = errorType;
        this.httpStatus = status;
        this.params = params;
    }

    /**
     * Constructor with errorType
     *
     * @param errorType the type of error
     * @param params    arguments to fill descriptions
     */
    public ProcessException(final ErrorType errorType, final Object... params) {
        this(errorType.getDefaultStatus(), errorType, params);
    }

}
