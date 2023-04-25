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

    @Column(name="weather")
    private String weather;

    @ManyToOne
    @JoinColumn(name = "munro_id")
    private Munro munro;

    @JsonIgnoreProperties(value = "logs")
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_logs",
            joinColumns = {@JoinColumn(name = "log_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private List<User> users;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Log(String comment, String dateCompleted, String weather, Munro munro) {
        this.comment = comment;
        this.dateCompleted = dateCompleted;
        this.weather = weather;
        this.munro = munro;
        this.users = new ArrayList<User>();
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




    public Munro getMunro() {
        return munro;
    }

    public void setMunro(Munro munro) {
        this.munro = munro;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
