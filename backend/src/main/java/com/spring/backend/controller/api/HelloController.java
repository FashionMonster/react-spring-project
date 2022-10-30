package com.spring.backend.controller.api;

import com.spring.backend.domain.Hello;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/hello")
public class HelloController {

    @GetMapping("/getHello")
    @ResponseBody
    public Hello getHello(){

        Hello hello = new Hello();
        hello.setTitle("ReactとSpring Bootを使った開発");
        hello.setMessage("レスポンス成功");

        return hello;
    }
}
