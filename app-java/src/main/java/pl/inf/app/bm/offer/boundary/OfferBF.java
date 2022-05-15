package pl.inf.app.bm.offer.boundary;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.bm.offer.control.OfferRepositoryBA;
import pl.inf.app.bm.offer.control.UiOfferToEntityMapper;
import pl.inf.app.bm.offer.entity.OfferBE;
import pl.inf.app.error.ProcessException;
import pl.inf.app.utils.Filler;
import pl.inf.app.utils.Mapper;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import static pl.inf.app.error.ErrorType.OFFER_ADDING_ERROR;
import static pl.inf.app.error.ErrorType.OFFER_NOT_FOUND;
import static pl.inf.app.error.ErrorType.OFFER_UPDATING_ERROR;

/**
 * The offer business facade class
 */
@Service
@RequiredArgsConstructor
public class OfferBF {
    private final OfferRepositoryBA offerRepositoryBA;
    private final UiOfferToEntityMapper uiOfferToEntityMapper;

    /**
     * Get offer from the database for the given id
     *
     * @param id     the id of offer
     * @param mapper entity mapper
     * @return mapped offer
     * @throws ProcessException if no offer with the given id was found
     */
    public <T> T getById(final UUID id, final Mapper<OfferBE, T> mapper) {
        return offerRepositoryBA.findById(id).map(mapper::map).orElseThrow(() -> new ProcessException(OFFER_NOT_FOUND, id));
    }

    /**
     * Retrieve list of all offers form database
     *
     * @param mapper entity mapper
     * @return list of mapped offers
     */
    public <T> List<T> getAll(final Mapper<OfferBE, T> mapper) {
        return offerRepositoryBA.findAll().stream().map(mapper::map).collect(Collectors.toList());
    }

    /**
     * Fills and saves the offer entity
     *
     * @param uiOffer  data to fill the entity
     * @param uiMapper mapper for the UI model
     * @param <T>      The class type of the mapping target
     * @return saved entity
     * @throws ProcessException if we cannot save the entity
     */
    public <T> T create(final UiOffer uiOffer, final Mapper<OfferBE, T> uiMapper) {
        final OfferBE offerBE = uiOfferToEntityMapper.map(new Filler<>(uiOffer, new OfferBE()));
        return Optional.of(offerRepositoryBA.save(offerBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(OFFER_ADDING_ERROR, offerBE));
    }

    /**
     * Fills and updates the offer entity
     *
     * @param uiOffer  data to fill the entity
     * @param uiMapper mapper for the UI model
     * @param <T>      The class type of the mapping target
     * @return updated entity
     * @throws ProcessException if we cannot update the entity
     */
    @Transactional
    public <T> T update(final UiOffer uiOffer, final Mapper<OfferBE, T> uiMapper) {
        final OfferBE offer = offerRepositoryBA.findById(uiOffer.getId()).orElseThrow(
                () -> new ProcessException(OFFER_NOT_FOUND, uiOffer.getId()));
        final OfferBE offerBE = uiOfferToEntityMapper.map(new Filler<>(uiOffer, offer));
        return Optional.of(offerRepositoryBA.save(offerBE)).map(uiMapper::map).orElseThrow(
                () -> new ProcessException(OFFER_UPDATING_ERROR, offerBE));
    }
}
