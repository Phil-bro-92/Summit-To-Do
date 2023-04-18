package com.capstone.summitToDo.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

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



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Munro(String name, int height) {
        this.name = name;
        this.height = height;


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
}
