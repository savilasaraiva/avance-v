package com.br.ufc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("")
public class SistemaController {
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping("")
	public ModelAndView init() {
		ModelAndView mv = new ModelAndView ("redirect:/login");
		return mv;
	}
	
	@RequestMapping("/")
	public ModelAndView init_() {
		ModelAndView mv = new ModelAndView ("redirect:/login");
		return mv;
	}
}
