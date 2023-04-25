package com.capstone.summitToDo.repositories;

import com.capstone.summitToDo.models.Log;
import com.capstone.summitToDo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

}
