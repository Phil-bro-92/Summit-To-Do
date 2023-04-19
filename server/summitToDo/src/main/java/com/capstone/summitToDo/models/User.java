package com.capstone.summitToDo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Column(name = "name")
    private String name;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "profile_picture")
    private String profilePicture;

    @JsonIgnoreProperties(value = "users")
    @OneToMany
    @JoinTable(
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "munro_id")}
    )
    private List<Munro> munrosCompleted;

    @JsonIgnoreProperties(value = "users")
    @ManyToMany
    @JoinTable(
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "log_id")}
    )
    private List<Log> logs;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public User(String name, String userName, String password, String profilePicture) {
        this.name = name;
        this.userName = userName;
        this.password = password;
        this.profilePicture = profilePicture;
        this.munrosCompleted = new ArrayList<>();
        this.logs = new ArrayList<>();
    }

    public User() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Log> getLogs() {
        return logs;
    }

    public void setLogs(List<Log> logs) {
        this.logs = logs;
    }

    public void addLog(Log log) {
        this.logs.add(log);
    }

    public void removeLog(Log log) {
        this.logs.remove(log);
    }

    public List<Munro> getMunrosCompleted() {
        return munrosCompleted;
    }

    public void setMunrosCompleted(List<Munro> munrosCompleted) {
        this.munrosCompleted = munrosCompleted;
    }

    public void addMunroCompleted(Munro munro) {
        this.munrosCompleted.add(munro);
    }

    public void removeMunroCompleted(Munro munro) {
        this.munrosCompleted.remove(munro);
    }

    public String getProfilePicture() {
        return profilePicture;
    }
}