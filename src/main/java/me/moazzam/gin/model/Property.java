package me.moazzam.gin.model;

import com.fasterxml.jackson.databind.JsonNode;

import java.util.Map;

/**
 * Created by moazzamkhan on 12/02/17.
 */
public class Property {
    private String name;
    private String type;
    private String constraints;
    private String description;

    public Property() {
    }

    public Property(String name, String type, String description) {
        this.name = name;
        this.type = type;
        this.description = description;
    }

    public Property(String name, String type) {
        this.name = name;
        this.type = type;
        this.description = "";
    }

    public Property(Map.Entry<String, JsonNode> entry) {
        this.name = entry.getKey();
        this.type = entry.getValue().asText();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getConstraints() {
        return constraints;
    }

    public void setConstraints(String constraints) {
        this.constraints = constraints;
    }
}
