package com.capstone.summitToDo.controllers;

import com.capstone.summitToDo.models.Log;
import com.capstone.summitToDo.repositories.LogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LogController {

    @Autowired
    LogRepository logRepository;

    @GetMapping(value = "/logs")
    public ResponseEntity<List<Log>> getAllLogs() {
        return new ResponseEntity<>(logRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/logs/{id}")
    public ResponseEntity<Optional<Log>> getLog(@PathVariable Long id) {
        return new ResponseEntity<>(logRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/logs")
    public ResponseEntity<Log> postLog(@RequestBody Log log) {
        logRepository.save(log);
        return new ResponseEntity<>(log, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/logs/{id}")
    public ResponseEntity<Log> updateLog(@RequestBody Log log) {
        logRepository.save(log);
        return new ResponseEntity<>(log, HttpStatus.OK);
    }

    @DeleteMapping(value = "/logs/{id}")
    public ResponseEntity<Log> deleteLog(@PathVariable Long id) {
        Log found = logRepository.getOne(id);
        logRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
