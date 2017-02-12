package me.moazzam.gin.model;

/**
 * Created by moazzamkhan on 08/02/17.
 */
public class Thing {
    private Long id;
    private String type;
    private String property;
    private String value;
    private Long valueOf;
    private String label;

    public Thing() {
    }

    public Thing(Long id, String type, String property, String value, Long valueOf, String label) {
        this.id = id;
        this.type = type;
        this.property = property;
        this.value = value;
        this.valueOf = valueOf;
        this.label = label;
    }

    public Thing(long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }


    public Long getValueOf() {
        return valueOf;
    }

    public void setValueOf(Long valueOf) {
        this.valueOf = valueOf;
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
