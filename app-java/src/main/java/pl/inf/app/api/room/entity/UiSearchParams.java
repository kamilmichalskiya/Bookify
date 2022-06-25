package pl.inf.app.api.room.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.inf.app.bm.room.entity.AddOns;
import pl.inf.app.bm.room.entity.RoomType;

import java.sql.Date;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * Model for UI Search Params
 */
@Getter
@Setter
@NoArgsConstructor
public class UiSearchParams {
    private int adult = 1;
    private int kids = 0;
    private Set<AddOns> addOns = new HashSet<>();
    private Set<RoomType> roomTypes = new HashSet<>();
    private Date startDate;
    private Date endDate;

    /**
     * Checks the parameters to be valid.
     *
     * @return true if serach params are valid
     */
    public boolean areValid() {
        if (startDate != null && endDate != null) {
            final Date date = new Date(LocalDate.now().atStartOfDay().toInstant(OffsetDateTime.now().getOffset()).toEpochMilli());
            startDate = new Date(
                    startDate.toLocalDate().atStartOfDay().toInstant(OffsetDateTime.now().getOffset()).toEpochMilli());
            endDate = new Date(endDate.toLocalDate().atStartOfDay().toInstant(OffsetDateTime.now().getOffset()).toEpochMilli());
            return adult >= 1 && kids >= 0 && !startDate.before(date) && endDate.after(startDate);
        }
        return false;
    }

    @Override
    public String toString() {
        return "UiSearchParams{" + "adult=" + adult + ", kids=" + kids + ", addOns=" + addOns + ", roomTypes=" + roomTypes +
               ", startDate=" + startDate + ", endDate=" + endDate + '}';
    }
}
