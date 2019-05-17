package com.glweems.portfolio.repo;

import com.glweems.portfolio.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepo extends CrudRepository<Message, Long> {}
