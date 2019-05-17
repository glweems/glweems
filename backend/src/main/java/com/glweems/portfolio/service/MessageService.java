package com.glweems.portfolio.service;

import com.glweems.portfolio.model.Message;

import java.util.List;

public interface MessageService {
    List<Message> findAll();

    Message save(Message message);

    Message findMsgById(long id);

    Message read(long id);
}
