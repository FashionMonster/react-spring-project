package com.spring.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("app")
public class TopController {

    /**
     * 初期表示
     * app/**のURLは全てindex.htmlを表示する。それ以外のURLはREST APIコントローラーを呼び出す
     * @return 画面名（バンドルされたReactを読み込んだindex.html）
     */
    @GetMapping("/**")
    public String index() {
        return "index";
    }
}