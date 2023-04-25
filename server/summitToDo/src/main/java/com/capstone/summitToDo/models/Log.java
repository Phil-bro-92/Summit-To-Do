package com.capstone.summitToDo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "logs")
public class Log {

    @Column(name = "comment")
    private String comment;

    @Column(name = "date_completed")
    private String dateCompleted;

    @Column(name = "weather")
    private String weather;

    @Column(name= "munro_name")
    private String munroName;

    @Column(name="munro_height")
    private String munroHeight;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Log(String comment, String dateCompleted, String weather, String munroName, String munroHeight) {
        this.comment = comment;
        this.dateCompleted = dateCompleted;
        this.weather = weather;
        this.munroName = munroName;
        this.munroHeight = munroHeight;
    }

    public Log() {
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(String dateCompleted) {
        this.dateCompleted = dateCompleted;
    }


    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMunroName() {
        return munroName;
    }

    public void setMunroName(String munroName) {
        this.munroName = munroName;
    }

    public String getMunroHeight() {
        return munroHeight;
    }

    public void setMunroHeight(String munroHeight) {
        this.munroHeight = munroHeight;
    }
}

