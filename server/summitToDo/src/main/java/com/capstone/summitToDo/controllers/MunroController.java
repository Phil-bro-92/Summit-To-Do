package com.capstone.summitToDo.controllers;

import com.capstone.summitToDo.models.Log;
import com.capstone.summitToDo.models.Munro;
import com.capstone.summitToDo.repositories.MunroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@RestController
public class MunroController {
    @Autowired
    MunroRepository munroRepository;
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/api/data")
    public ResponseEntity<String> getData() {
        String url = "https://raw.githubusercontent.com/Phil-bro-92/munro_api/main/munroAPI.json";
        String data = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(data);
    }

    @GetMapping(value = "/munros")
    public ResponseEntity<List<Munro>> getAllMunros() {
        return new ResponseEntity<>(munroRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/munros/{id}")
    public ResponseEntity<Optional<Munro>> getMunro(@PathVariable Long id) {
        return new ResponseEntity<>(munroRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/munros")
    public ResponseEntity<Munro> postMunro(@RequestBody Munro munro) {
        munroRepository.save(munro);
        return new ResponseEntity<>(munro, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/munros/{id}")
    public ResponseEntity<Munro> updateMunro(@RequestBody Munro munro) {
        munroRepository.save(munro);
        return new ResponseEntity<>(munro, HttpStatus.OK);
    }

    @DeleteMapping(value = "/munros/{id}")
    public ResponseEntity<Munro> deleteMunro(@PathVariable Long id) {
        Munro found = munroRepository.getOne(id);
        munroRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
