package com.capstone.summitToDo.components;

import com.capstone.summitToDo.models.Munro;
import com.capstone.summitToDo.repositories.LogRepository;
import com.capstone.summitToDo.repositories.MunroRepository;
import com.capstone.summitToDo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;


@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    LogRepository logRepository;

    @Autowired
    MunroRepository munroRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args) {
        Munro munro1 = new Munro("Ben Nevis", "Venomous Mountain", 1345, -3, -4, "3", "3", "3", "3", "3", true, "3", "3");
        munroRepository.save(munro1);


    }

}
