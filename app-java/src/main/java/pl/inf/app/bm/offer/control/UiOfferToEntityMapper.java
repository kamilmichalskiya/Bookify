package pl.inf.app.bm.offer.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.bm.offer.entity.OfferBE;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

/**
 * Fills the database offer model according to the UI offer model
 */
@Component
public class UiOfferToEntityMapper implements Mapper<Filler<UiOffer, OfferBE>, OfferBE> {
    @Override
    public OfferBE map(final Filler<UiOffer, OfferBE> filler) {
        if (filler == null) return null;

        final OfferBE target = filler.getTarget();
        final UiOffer source = filler.getSource();

        target.setName(source.getName());
        target.setPrice(source.getPrice());
        target.setDetails(source.getDetails());
        target.setActive(source.isActive());

        return target;
    }
}
