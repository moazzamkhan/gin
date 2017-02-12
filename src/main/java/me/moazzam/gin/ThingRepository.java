package me.moazzam.gin;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.moazzam.gin.model.Thing;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by moazzamkhan on 09/02/17.
 */
public class ThingRepository {
    private static final String JSON_PATH = "./src/main/resources/data.json";
    private static final String DEFAULT_JSON_PATH = "./src/main/resources/defaultList.json";

    private static List<Thing> things;

    private static void _walkTree(JsonNode node) {
        for (Iterator<String> it = node.fieldNames(); it.hasNext(); ) {
            String key = it.next();
            if (!node.get(key).isContainerNode()) {
                System.out.println(new Thing(0l, "", key, node.get(key).asText(), 0l,""));
                System.out.println(key + ":" + node.get(key));
            } else {
                System.out.println(key + "#-------");
                _walkTree(node.get(key));
            }
        }
    }

    public static List<Thing> createDefault() {
        List<Thing> defaultThings = null;
        ObjectMapper mapper = new ObjectMapper();
        try {
            JsonNode root = mapper.readTree(new File(DEFAULT_JSON_PATH));
            _walkTree(root);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return defaultThings;
    }

    public static List<Thing> all() {
        if (things == null) {
            ObjectMapper mapper = new ObjectMapper();
            File dataFile = new File(JSON_PATH);
            try {
                things = mapper.readValue(dataFile, new TypeReference<List<Thing>>() {
                });
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return things;
    }

    public static List<Thing> getOne(Long id) {
        return all().stream().filter(thing -> (id == thing.getId() || id == thing.getValueOf())).collect(Collectors.toList());
    }

    public static Thing create() {
        if (things == null) {
            things = new ArrayList<Thing>();
        }
        Thing t = new Thing((long) things.size());
        things.add(t);
        return t;
    }

    public static Thing update(Long id, AbstractMap.SimpleEntry<String, String> entry) {
        return null;
    }

    public static Map<String, Object> _getDefault() {
        ObjectMapper mapper = new ObjectMapper();
        File dataFile = new File(JSON_PATH);
        try {
            return mapper.readValue(dataFile, new TypeReference<Map<String, Object>>() {
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static boolean _saveDefault(Map<String, Object> json) {
        ObjectMapper mapper = new ObjectMapper();
        File dataFile = new File(JSON_PATH);
        try {
            mapper.writeValue(dataFile, json);
            return true;
        } catch (IOException e) {

            e.printStackTrace();

        }
        return false;
    }

    public static void save() {
        if (things != null) {
            ObjectMapper mapper = new ObjectMapper();
            File dataFile = new File(JSON_PATH);
            try {
                mapper.writeValue(dataFile, things);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        createDefault();
    }
}
