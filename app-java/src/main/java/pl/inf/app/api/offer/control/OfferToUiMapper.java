package pl.inf.app.api.offer.control;

import org.springframework.stereotype.Component;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.bm.offer.entity.OfferBE;
import pl.inf.app.utils.Mapper;

/**
 * Map database offer model to ui offer model
 */
@Component
public class OfferToUiMapper implements Mapper<OfferBE, UiOffer> {
    @Override
    public UiOffer map(final OfferBE source) {
        final UiOffer offer = new UiOffer();
        offer.setId(source.getId());
        offer.setName(source.getName());
        offer.setPrice(source.getPrice());
        offer.setDetails(source.getDetails());
        offer.setActive(source.isActive());
        return offer;
    }
}
