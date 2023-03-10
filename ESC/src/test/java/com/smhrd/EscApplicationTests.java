package com.smhrd;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.smhrd.repository.UserRepository;

@SpringBootTest
class EscApplicationTests {

	@Autowired	// DI 기능, 객체 자동 생성, test code 에선 생성자를 통한 DI 불가능 -> @Autowired
	private UserRepository userRepository;
	
//	@Transactional
	@Test
	void contextLoads() {
		
//		1) save
//		User u1 = new User();
//		u1.setUserId("testU1");
//		u1.setUserPw("testU1Pw");
//		u1.setUserNick("testU1Nick");
//		u1.setUserGender("male");
//		this.userRepository.save(u1); // 첫번째 유저 저장
//		
//		User u2 = new User();
//		u2.setUserId("testU2");
//		u2.setUserPw("testU2Pw");
//		u2.setUserNick("testU2Nick");
//		u2.setUserGender("female");
//		this.userRepository.save(u2); // 두번째 유저 저장

//		2) findAll
//		List<User> all = this.userRepository.findAll();
//		assertEquals(2, all.size());
//
//		User u = all.get(0);
//		assertEquals("testU1Nick", u.getUserNick());

//		3) findById
//		Optional<User> oq = this.userRepository.findById("testU1");
//		if(oq.isPresent()) {
//			User u = oq.get();
//			assertEquals("testU1Nick", u.getUserNick());
//		}
		
//		4) findByUserNick
//		User u = this.userRepository.findByUserNick("testU1Nick");
//		assertEquals("testU1", u.getUserId());
		
//		5) findByUserIdAndUserPw
//		User u = this.userRepository.findByUserIdAndUserPw("testU1", "testU1Pw");
//		assertEquals("testU1Nick", u.getUserNick());
		
//		6) findByUserNickLike
//		List<User> uList = this.userRepository.findByUserNickLike("%test%");
//		User u = uList.get(0);
//		assertEquals("testU1Nick", u.getUserNick());
		
//		7) 데이터 수정하기
//		Optional<User> oq = this.userRepository.findById("testU1");
//		assertTrue(oq.isPresent());
//		User u = oq.get();
//		u.setUserNick("수정된 testU1 닉네임");
//		this.userRepository.save(u);

//		8) 데이터 삭제하기
//		assertEquals(2, this.userRepository.count());
//		Optional<User> oq2 = this.userRepository.findById("testU2");
//		assertTrue(oq2.isPresent());
//		User u2 = oq2.get();
//		this.userRepository.delete(u2);
//		assertEquals(1, this.userRepository.count());
		
//		9) OneToMany 혼자 끄적끄적
//		Cosmetic csmt = new Cosmetic();
//		csmt.getCosIng().get(0).getIng().getIngFcn();
		
	}
}
