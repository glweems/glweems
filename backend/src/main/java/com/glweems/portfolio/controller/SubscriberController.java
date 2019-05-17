package com.glweems.portfolio.controller;

import com.glweems.portfolio.model.Subscriber;
import com.glweems.portfolio.service.SubscriberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
public class SubscriberController
{
    @Autowired
    private SubscriberService subscriberService;

    // GET SUBSCRIBERS
    @RequestMapping("/subscribers")
    @GetMapping(value = "",
            produces = {"application/json"})
    public ResponseEntity<?> listAllSubscribers() {
        List<Subscriber> mySubscribers = subscriberService.findAll();
        return new ResponseEntity<>(mySubscribers, HttpStatus.OK);
    }

    // POST /api/subscribe
    @PostMapping(value = "/subscribe",
                consumes = {"application/json"},
                produces = {"application/json"})
    public ResponseEntity<?> addNewSubscriber(
            @Valid
            @RequestBody
            Subscriber newSubscriber) throws URISyntaxException
    {
        newSubscriber = subscriberService.save(newSubscriber);
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newRestaurantURI = ServletUriComponentsBuilder.fromCurrentRequest().buildAndExpand(newSubscriber.getId()).toUri();
        responseHeaders.setLocation(newRestaurantURI);

        return new ResponseEntity<>(null, responseHeaders, HttpStatus.CREATED);
    }

    // UNSUBSCRIBE
    @DeleteMapping("/unsubscribe/{id}")
    public ResponseEntity<?> deleteSubscriberById(@PathVariable long id) {
        subscriberService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
