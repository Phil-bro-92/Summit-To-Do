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

    @Column(name = "meaning")
    private String meaning;

    @Column(name = "height")
    private int height;

    @Column(name = "latitude")
    private int latitude;

    @Column(name = "longitude")
    private int longitude;

    @Column(name = "region")
    private String region;

    @Column(name = "gaelic_name")
    private String gaelicName;

    @Column(name = "pronunciation")
    private String pronunciation;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "duration")
    private String duration;

    @Column(name = "climbed")
    private Boolean climbed;

    @Column(name = "google_maps_link")
    private String googleMapsLink;

    @Column(name = "walkhighlands_link")
    private String walkhighlandsLink;

    @JsonBackReference
    @OneToMany(mappedBy = "munro")
    private List<Log> logs;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Munro(String name, String meaning, int height, int latitude, int longitude, String region, String gaelicName, String pronunciation, String difficulty, String duration, Boolean climbed, String googleMapsLink, String walkhighlandsLink) {
        this.name = name;
        this.meaning = meaning;
        this.height = height;
        this.latitude = latitude;
        this.longitude = longitude;
        this.region = region;
        this.gaelicName = gaelicName;
        this.pronunciation = pronunciation;
        this.difficulty = difficulty;
        this.duration = duration;
        this.climbed = climbed;
        this.googleMapsLink = googleMapsLink;
        this.walkhighlandsLink = walkhighlandsLink;
        this.logs = new ArrayList<>();
    }

    public Munro() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMeaning() {
        return meaning;
    }

    public void setMeaning(String meaning) {
        this.meaning = meaning;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getLatitude() {
        return latitude;
    }

    public void setLatitude(int latitude) {
        this.latitude = latitude;
    }

    public int getLongitude() {
        return longitude;
    }

    public void setLongitude(int longitude) {
        this.longitude = longitude;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getGaelicName() {
        return gaelicName;
    }

    public void setGaelicName(String gaelicName) {
        this.gaelicName = gaelicName;
    }

    public String getPronunciation() {
        return pronunciation;
    }

    public void setPronunciation(String pronunciation) {
        this.pronunciation = pronunciation;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Boolean getClimbed() {
        return climbed;
    }

    public void setClimbed(Boolean climbed) {
        this.climbed = climbed;
    }

    public String getGoogleMapsLink() {
        return googleMapsLink;
    }

    public void setGoogleMapsLink(String googleMapsLink) {
        this.googleMapsLink = googleMapsLink;
    }

    public String getWalkhighlandsLink() {
        return walkhighlandsLink;
    }

    public void setWalkhighlandsLink(String walkhighlandsLink) {
        this.walkhighlandsLink = walkhighlandsLink;
    }

    public List<Log> getLogs() {
        return logs;
    }

    public void setLogs(List<Log> logs) {
        this.logs = logs;
    }
}
