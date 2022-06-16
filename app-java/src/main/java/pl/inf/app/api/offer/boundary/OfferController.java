package pl.inf.app.api.offer.boundary;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.inf.app.api.offer.control.OfferToUiMapper;
import pl.inf.app.api.offer.entity.UiOffer;
import pl.inf.app.bm.offer.boundary.OfferBF;

import java.util.UUID;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
import static pl.inf.app.api.LinkRelations.CREATE_OFFER;
import static pl.inf.app.api.LinkRelations.GET_ALL_OFFERS;
import static pl.inf.app.api.LinkRelations.GET_OFFER;
import static pl.inf.app.api.LinkRelations.UPDATE_OFFER;

/**
 * Api for offers management
 */
@Api(tags = {"Offers"})
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/api/offers", produces = "application/hal+json")
public class OfferController {
    private final OfferBF offerBF;
    private final OfferToUiMapper offerToUiMapper;

    /**
     * Get all offers from database
     *
     * @return list of offers
     */
    @GetMapping
    public ResponseEntity<CollectionModel<EntityModel<UiOffer>>> getAll() {
        return ResponseEntity.ok(CollectionModel.of(offerBF.getAll(offerToUiMapper).stream().map(offer -> EntityModel.of(offer)
                .add(linkTo(methodOn(OfferController.class).getById(offer.getId())).withRel(GET_OFFER.toString()))
                .add(linkTo(methodOn(OfferController.class).updateOffer(offer.getId(), null)).withRel(UPDATE_OFFER.toString())))
                .collect(Collectors.toList()))
                .add(linkTo(methodOn(OfferController.class).createOffer(null)).withRel(CREATE_OFFER.toString()))
                .add(linkTo(methodOn(OfferController.class).getAll()).withSelfRel()));
    }

    /**
     * Get offer from database
     *
     * @param id the id of offer
     * @return offer
     */
    @GetMapping("/{id}")
    public ResponseEntity<EntityModel<UiOffer>> getById(@PathVariable final UUID id) {
        return ResponseEntity.ok(EntityModel.of(offerBF.getById(id, offerToUiMapper)).add(
                linkTo(methodOn(OfferController.class).updateOffer(id, null)).withRel(UPDATE_OFFER.toString()))
                .add(linkTo(methodOn(OfferController.class).getAll()).withRel(GET_ALL_OFFERS.toString()))
                .add(linkTo(methodOn(OfferController.class).getById(id)).withSelfRel()));
    }

    /**
     * Create new offer
     *
     * @param uiOffer offer to save
     * @return saved offer
     */
    @PostMapping
    public ResponseEntity<EntityModel<UiOffer>> createOffer(@RequestBody final UiOffer uiOffer) {
        final UiOffer offer = offerBF.create(uiOffer, offerToUiMapper);
        return ResponseEntity.ok(EntityModel.of(offer)
                .add(linkTo(methodOn(OfferController.class).getById(offer.getId())).withRel(GET_OFFER.toString()))
                .add(linkTo(methodOn(OfferController.class).createOffer(null)).withSelfRel()));
    }

    /**
     * Update offer
     *
     * @param id      the id of offer
     * @param uiOffer offer to update
     * @return updated offer
     */
    @PutMapping("/{id}")
    public ResponseEntity<EntityModel<UiOffer>> updateOffer(@PathVariable final UUID id, @RequestBody final UiOffer uiOffer) {
        uiOffer.setId(id);
        final UiOffer offer = offerBF.update(uiOffer, offerToUiMapper);
        return ResponseEntity.ok(EntityModel.of(offer)
                .add(linkTo(methodOn(OfferController.class).getById(offer.getId())).withRel(GET_OFFER.toString()))
                .add(linkTo(methodOn(OfferController.class).updateOffer(id, null)).withSelfRel()));
    }

}
