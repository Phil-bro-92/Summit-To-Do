package com.capstone.summitToDo.models;

import javax.persistence.*;
import java.text.DateFormat;

@Entity
@Table(name = "logs")
public class Log {

    @Column(name = "comment")
    private String comment;

    @Column(name = "date_completed")
    private String dateCompleted;



    @ManyToOne
    @JoinColumn(name = "munro_id")
    private Munro munro;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Log(String comment, String dateCompleted, Munro munro) {
        this.comment = comment;
        this.dateCompleted = dateCompleted;
        this.munro = munro;
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

    public Munro getMunro() {
        return munro;
    }

    public void setMunro(Munro munro) {
        this.munro = munro;
    }
}
