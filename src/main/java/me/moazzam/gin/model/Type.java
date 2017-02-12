package me.moazzam.gin.model;

import com.fasterxml.jackson.databind.JsonNode;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Created by moazzamkhan on 12/02/17.
 */
public class Type {
    private String name;
    private List<Property> properties;
    private String namespace;

    public Type() {
    }

    public Type(JsonNode node) {
        this.name = node.fieldNames().next();
        JsonNode propNode = node.get(this.name);
        if (propNode != null) {
            properties = new ArrayList<Property>();
            for (Iterator<Map.Entry<String, JsonNode>> it = propNode.fields(); it.hasNext(); ) {
                Map.Entry<String, JsonNode> entry = it.next();
                properties.add(new Property(entry));
            }
        }
    }

    public Type(String name, List<Property> properties) {
        this.name = name;
        this.properties = properties;
        this.namespace = "me.moazzam.types";
    }

    public Type(String name, List<Property> properties, String namespace) {
        this.name = name;
        this.properties = properties;
        this.namespace = namespace;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Property> getProperties() {
        return properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
    }

    public boolean isComplex() {
        return properties != null;
    }

    public String getNamespace() {
        return namespace;
    }

    public void setNamespace(String namespace) {
        this.namespace = namespace;
    }
}
