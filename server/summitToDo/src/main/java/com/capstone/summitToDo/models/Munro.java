package com.capstone.summitToDo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "munros")
public class Munro {
    @Column(name = "name")
    private String name;

    @Column(name = "height")
    private int height;

    @JsonIgnoreProperties(value = "munro")
    @OneToMany(mappedBy = "munro", fetch = FetchType.LAZY)
    private List<Log> logs;



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Munro(String name, int height) {
        this.name = name;
        this.height = height;
        this.logs=new ArrayList<Log>();


    }

    public Munro() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }




    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Log> getLogs() {
        return logs;
    }

    public void setLogs(List<Log> logs) {
        this.logs = logs;
    }
}
