package com.example.demo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping(value = "/hello")
    public String hello() {
        return "hello,Spring Boot";
    }

//    @RequestMapping(value = "/manager_static")
//    public String index() {
//        return "/";
//    }
//    要加路径名，在edit configuration 里面加 server.servlet.context-path  为 /manager_static

}