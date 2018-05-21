package com.example.cxf;

import org.apache.cxf.jaxrs.ext.multipart.Attachment;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class ServiceImpl implements Service {

    public String hello() {
        return "This text comes from the REST service";
    }

    private Attachment lastAttachment;

    public String uploadFile(Attachment attachment) throws IOException {
        String filename = attachment.getContentDisposition().getParameter("filename");

        lastAttachment = attachment;

        return "uploaded " + filename;
    }

    public Map<String, String> getLastUploadedDetails() {
        Map<String, String> result = new HashMap<>();
        if (lastAttachment != null) {
            result.put("filename", lastAttachment.getContentDisposition().getParameter("filename"));
        } else {
            result.put("filename", "empty");
        }
        return result;
    }
}
