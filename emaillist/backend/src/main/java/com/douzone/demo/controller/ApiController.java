package com.douzone.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.demo.dto.JsonResult;
import com.douzone.demo.repository.EmaillistRepository;
import com.douzone.demo.vo.EmaillistVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;

	@GetMapping("/emaillist")
	public ResponseEntity<JsonResult> readEmaillist() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll()));
	}
	
	@GetMapping("/email")
	public ResponseEntity<JsonResult> readEmaillistKeyword(@RequestParam(value="keyword", defaultValue="", required=true) String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findByKeyword(keyword)));
	}

	@PostMapping("/insert")
	public ResponseEntity<JsonResult> createEmaillist(@RequestBody EmaillistVo emaillistVo) {
		emaillistRepository.insert(emaillistVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistVo));
	}
	@DeleteMapping("/delete/{no}")
	public ResponseEntity<JsonResult> deleteEmaillist(@PathVariable("no") Long no){
		emaillistRepository.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
	
//	@SuppressWarnings("serial")
//	@PutMapping("/task/{no}")
//	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, String done) {
//		emaillistRepository.updateDone(no, done);
//		
//		return ResponseEntity
//				.status(HttpStatus.OK)
//				.body(JsonResult.success(new HashMap<String, Object>() {{
//				    put("no", no);
//				    put("done", done);
//				}}));
//	}

}
