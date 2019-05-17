package com.glweems.portfolio.service;

import com.glweems.portfolio.model.Message;
import com.glweems.portfolio.repo.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service(value = "messageService")
public class MessageServiceImpl implements MessageService
{
    @Autowired
    private MessageRepo messageRepo;

    @Override
    public List<Message> findAll()
    {
        List<Message> list = new ArrayList<>();
        messageRepo.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public Message save(Message message) {
        Message newMessage = new Message();

        newMessage.setName(message.getName());
        newMessage.setEmail(message.getEmail());
        newMessage.setBody(message.getBody());
        newMessage.setSeen();

        return messageRepo.save(newMessage);
    }

    @Override
    public Message findMsgById(long id) {
        return messageRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Message: " + id + " not found."));
    }

    @Override
    public Message read(long id) {
        Message msg = findMsgById(id);
        msg.markAsRead();

        return messageRepo.save(msg);
    }

}
