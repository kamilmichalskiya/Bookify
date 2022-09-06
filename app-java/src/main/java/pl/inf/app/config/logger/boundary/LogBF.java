package pl.inf.app.config.logger.boundary;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import pl.inf.app.config.logger.control.LogRepositoryBA;
import pl.inf.app.config.logger.entity.LogBE;
import pl.inf.app.config.logger.entity.LogType;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.time.Instant;

import static pl.inf.app.config.logger.entity.LogType.CREATE;
import static pl.inf.app.config.logger.entity.LogType.CUSTOM;
import static pl.inf.app.config.logger.entity.LogType.ERROR;
import static pl.inf.app.config.logger.entity.LogType.GET;
import static pl.inf.app.config.logger.entity.LogType.UPDATE;

/**
 * The log business facade class
 */
@Service
@RequiredArgsConstructor
public class LogBF {
    private static final String ANONYMOUS_USER = "ANONYMOUS";
    private static final String BASIC_FORMAT = "%s";
    private static final String UNKNOWN = "UNKNOWN";
    private static Logger LOGGER;
    private static LogRepositoryBA logRepository;

    private final LogRepositoryBA logRepositoryBA;

    /**
     * Fills and saves the log entity
     */
    private static void log(final String message, final LogType type, final Object... params) {
        final LogBE logBE = new LogBE();
        logBE.setUsername(ANONYMOUS_USER);
        logBE.setLogDate(Timestamp.from(Instant.now()));
        logBE.setMessage(String.format(message, params));
        logBE.setType(type);
        logBE.setUserRole(UNKNOWN);
        logBE.setSession(RequestContextHolder.currentRequestAttributes().getSessionId());
        logRepository.save(logBE);
    }

    private static <T> T log(final boolean safeLog, final LogType type, final T t) {
        if (safeLog) {
            try {
                log(LogBF.BASIC_FORMAT, type, t.toString());
            } catch (final Exception e) {
                LOGGER.error(e.getMessage());
            }
        } else {
            log(LogBF.BASIC_FORMAT, type, t.toString());
        }
        return t;
    }

    public static <T> T logGet(final T t) {
        return log(false, GET, t);
    }

    public static <T> T logCreate(final T t) {
        return log(true, CREATE, t);
    }

    public static <T> T logUpdate(final T t) {
        return log(true, UPDATE, t);
    }

    public static <T> T logError(final T t) {
        return log(true, ERROR, t);
    }

    public static void logCustom(final String message, final Object... params) {
        log(message, CUSTOM, params);
    }

    @PostConstruct
    private void initLogRepository() {
        logRepository = this.logRepositoryBA;
        LOGGER = LoggerFactory.getLogger(LogBF.class);
    }
}
