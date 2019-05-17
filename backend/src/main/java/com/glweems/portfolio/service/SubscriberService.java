package com.glweems.portfolio.service;

import com.glweems.portfolio.model.Subscriber;

import java.util.List;

public interface SubscriberService
{
    List<Subscriber> findAll();

    Subscriber save(Subscriber subscriber);

    Subscriber findSubscriberById(long id);

    void delete(long id);
}

