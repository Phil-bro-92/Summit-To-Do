package com.capstone.summitToDo.repositories;

import com.capstone.summitToDo.models.Log;
import com.capstone.summitToDo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {

}
