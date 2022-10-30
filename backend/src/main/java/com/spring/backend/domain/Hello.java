package com.spring.backend.domain;

import lombok.Data;

import java.io.Serializable;

@Data
public class Hello implements Serializable {

    private static final long serialVersionUID = 1L;

    private String title;

    private String message;
}
