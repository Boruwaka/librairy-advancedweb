package com.example.library;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String author;
    private String topic;
    private String imageUrl;
    private boolean isAudio;
    private int releaseDate;

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }


    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return the topic
     */
    public String getTopic() {
        return topic;
    }

    /**
     * @param topic the topic to set
     */
    public void setTopic(String topic) {
        this.topic = topic;
    }

    /**
     * @return the topic
     */
    public String getAuthor() {
        return author;
    }

    /**
     * @param author the topic to set
     */
    public void setAuthor(String author) { this.author = author; }

    /**
     * @return the topic
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * @param imageUrl the topic to set
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /**
     * @return the isAudio
     */
    public boolean getIsAudio() {
        return isAudio;
    }

    /**
     * @param isAudio the isAudio to set
     */
    public void setIsAudio(boolean isAudio) {
        this.isAudio = isAudio;
    }

    /**
     * @return the releaseDate
     */
    public int getReleaseDate() {
        return releaseDate;
    }

    /**
     * @param releaseDate the releaseDate to set
     */
    public void setReleaseDate(int releaseDate) {
        this.releaseDate = releaseDate;
    }


}
