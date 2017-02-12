package me.moazzam.gin.rest;

import me.moazzam.gin.ThingRepository;
import me.moazzam.gin.model.Thing;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/thing")
public class ThingService {

    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get() {
        return Response.status(200).entity(ThingRepository.all()).build();
    }
//
//    @POST
//    @Path("")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response save(Map<String, Object> data) {
//        return Response.ok().entity(String.valueOf(ThingRepository._saveDefault(data))).build();
//    }

    @POST
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public Response create() {
        return Response.status(200).entity(ThingRepository.create()).build();
    }

    @POST
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(@PathParam("id") Long id, Thing thing) {
        return Response.status(200).entity(id).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") long id) {
        return Response.status(200).entity(ThingRepository.getOne(id)).build();
    }
}
