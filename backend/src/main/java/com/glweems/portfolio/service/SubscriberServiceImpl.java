package com.glweems.portfolio.service;

import com.glweems.portfolio.model.Subscriber;
import com.glweems.portfolio.repo.SubscriberRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service(value = "subscriberService")
public class SubscriberServiceImpl implements SubscriberService
{
    @Autowired
    private SubscriberRepo subscriberRepo;

    @Override
    public List<Subscriber> findAll()
    {
        List<Subscriber> list = new ArrayList<>();
        subscriberRepo.findAll().iterator().forEachRemaining(list::add);
        return list;
    }


    @Override
    public Subscriber findSubscriberById(long id) throws EntityNotFoundException
    {
        return subscriberRepo.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("Subscriber: " + findSubscriberById(id).getEmail() + "not found"));
    }

    @Transactional
    @Override
    public Subscriber save(Subscriber subscriber){
        Subscriber newSubscriber = new Subscriber();

        newSubscriber.setEmail(subscriber.getEmail());

        return subscriberRepo.save(newSubscriber);
    }


    @Override
    public void delete(long id) {
        if (subscriberRepo.findById(id).isPresent()) {
            subscriberRepo.deleteById(id);
        } else {
            throw new EntityNotFoundException("Not Found");
        }
    }
}
