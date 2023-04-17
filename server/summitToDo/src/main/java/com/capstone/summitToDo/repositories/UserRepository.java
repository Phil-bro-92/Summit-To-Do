package com.capstone.summitToDo.repositories;

import com.capstone.summitToDo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
