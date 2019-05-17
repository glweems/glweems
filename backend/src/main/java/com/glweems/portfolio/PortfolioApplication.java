package com.glweems.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class PortfolioApplication
{

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);

    }
}
