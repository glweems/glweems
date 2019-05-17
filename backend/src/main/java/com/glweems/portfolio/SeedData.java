package com.glweems.portfolio;

import com.glweems.portfolio.model.Message;
import com.glweems.portfolio.model.Subscriber;
import com.glweems.portfolio.repo.MessageRepo;
import com.glweems.portfolio.repo.SubscriberRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import javax.transaction.Transactional;
import java.util.ArrayList;

@Transactional
@Component
public class SeedData implements CommandLineRunner {
    private SubscriberRepo subscriberRepos;
    private MessageRepo messageRepos;


    public SeedData(SubscriberRepo subscriberRepos, MessageRepo messageRepos) {
        this.subscriberRepos = subscriberRepos;
        this.messageRepos = messageRepos;
    }

    @Override
    public void run(String[] args) throws Exception {
        Subscriber sub1 = new Subscriber("test1@test.com");
        Subscriber sub2 = new Subscriber("test2@test.com");
        ArrayList<Subscriber> allSubscribers = new ArrayList<>();
        allSubscribers.add(sub1);
        allSubscribers.add(sub2);
        subscriberRepos.save(sub1);
        subscriberRepos.save(sub2);


        Message msg1 = new Message("Garrett", "gw@hi.com", "whats up dude");
        messageRepos.save(msg1);
        Message msg2 = new Message("Hard Ass", "hard@ass.com", "I'm a hard ass");
        messageRepos.save(msg2);
    }
}