package com.example.cxf;

import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.Map;

public interface Service {

    @GET
    @Path("test")
    @Produces(MediaType.APPLICATION_JSON)
    String hello();

    @POST
    @Path("/upload")
    @Produces(MediaType.TEXT_HTML)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    String uploadFile(@Multipart("upfile") Attachment attachment) throws IOException;

    @GET
    @Path("/details")
    @Produces(MediaType.APPLICATION_JSON)
    Map<String, String> getLastUploadedDetails();
}
