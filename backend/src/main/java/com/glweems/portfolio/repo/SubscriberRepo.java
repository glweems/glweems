package com.glweems.portfolio.repo;

import com.glweems.portfolio.model.Subscriber;
import org.springframework.data.repository.CrudRepository;
import java.util.UUID;

public interface SubscriberRepo extends CrudRepository<Subscriber, Long> {}
