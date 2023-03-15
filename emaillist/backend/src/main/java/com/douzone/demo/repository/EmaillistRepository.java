package com.douzone.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.demo.vo.EmaillistVo;

@Repository
public class EmaillistRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<EmaillistVo> findAll() {
		return sqlSession.selectList("emaillist.findAll");
	}

	public void insert(EmaillistVo emaillistVo) {
		sqlSession.insert("emaillist.insert", emaillistVo);
		
	}

	public void delete(Long no) {
		sqlSession.delete("emaillist.delete", no);
	}

	public List<EmaillistVo> findByKeyword(String keyword) {
		return sqlSession.selectList("emaillist.findByKeyword", keyword);
	}

}
