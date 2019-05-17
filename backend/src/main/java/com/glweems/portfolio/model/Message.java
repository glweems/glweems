package com.glweems.portfolio.model;


import javax.persistence.*;

@Entity
@Table(name = "messages")
public class Message
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name",
        nullable = false)

    private String name;

    private String email;

    private String body;

    private boolean seen;

    public Message() {}

    public Message(String name, String email, String message) {
        this.name = name;
        this.email = email;
        this.body = message;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public boolean isSeen() {
        return seen;
    }

    public void setSeen() {
        this.seen = false;
    }

    public void markAsRead() {
        this.seen = true;
    }

}
