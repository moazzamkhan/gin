package me.moazzam.gin.model;

import com.fasterxml.jackson.databind.JsonNode;

import java.util.Map;

/**
 * Created by moazzamkhan on 12/02/17.
 */
public class Property {
    private String name;
    private String type;

    public Property() {
    }

    public Property(String name, String type) {
        this.name = name;
        this.type = type;
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
}
