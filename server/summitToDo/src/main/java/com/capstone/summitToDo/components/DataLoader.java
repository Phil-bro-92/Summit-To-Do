package com.capstone.summitToDo.components;

import com.capstone.summitToDo.models.Log;
import com.capstone.summitToDo.models.Munro;
import com.capstone.summitToDo.models.User;
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


        Munro munro1 = new Munro("Ben Nevis", 1345);
        munroRepository.save(munro1);
        Munro munro2 = new Munro("Ben Macdui", 1309);
        munroRepository.save(munro2);
        Munro munro3 = new Munro("Braeriach", 1296);
        munroRepository.save(munro3);
        Munro munro4 = new Munro("Cairn Toul", 1291);
        munroRepository.save(munro4);
        Munro munro5 = new Munro("Sgor an Lochain Uaine", 1258);
        munroRepository.save(munro5);
        Munro munro6 = new Munro("Cairn Gorm", 1245);
        munroRepository.save(munro6);
        Munro munro7 = new Munro("Aonach Beag", 1234);
        munroRepository.save(munro7);
        Munro munro8 = new Munro("Aonach Mor", 1221);
        munroRepository.save(munro8);
        Munro munro9 = new Munro("Carn Mor Dearg", 1220);
        munroRepository.save(munro9);
        Munro munro10 = new Munro("Ben Lawers", 1214);
        munroRepository.save(munro10);

        Log log1 = new Log("was easy", "2018-12-09", munro1);
        logRepository.save(log1);
        Log log2 = new Log("was windy", "2019-11-09", munro7);
        logRepository.save(log2);


        User becca = new User("Becca", "BB", "BB", "");
        User daniel = new User("Daniel", "DP", "DP", "");
        User eliza = new User("Eliza", "EP", "EP", "");
        User phil = new User("Phil", "PB", "PB", "");

        phil.addMunroCompleted(munro1);
        phil.addLog(log1);
        daniel.addMunroCompleted(munro7);
        daniel.addLog(log2);


        userRepository.save(becca);
        userRepository.save(daniel);
        userRepository.save(eliza);
        userRepository.save(phil);


    }


}
