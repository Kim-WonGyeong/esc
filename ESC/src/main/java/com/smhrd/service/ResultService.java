package com.smhrd.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.smhrd.entity.Result;
import com.smhrd.entity.User;
import com.smhrd.repository.ResultRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ResultService {
	
	private final ResultRepository resultRepository;
	
	// 문진 결과 저장 : save()
	public Result rsSave(Result rs) {
		Result result = this.resultRepository.save(rs);
		return result;
	}
	
	// user_id로 문진 결과 전체 조회
	// 문진 결과 히스토리 조회 기능 구현할 때 활용 가능할 듯
//	public List<Result> getResultList(String userId){
//		User user = this.userRepository.findByUserId(userId);
//		List<Result> resultList = this.resultRepository.findAllByUser(user);
//		return resultList;
//	}
	
	// user로 문진 결과 히스토리 조회
	public List<Result> getResultList(User user){
		List<Result> resultList = this.resultRepository.findAllByUserOrderByRseq(user);
		return resultList;
	}
	
	// 문진번호로 문진 결과 조회
	// 문진 완료 후 바로 보여주는 결과 조회시 활용 가능할 듯
	public Result getResult(Long rSeq) {
		Result rs = this.resultRepository.findByRseq(rSeq);
			return rs;
	}

}
