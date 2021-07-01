package com.example.pruebatecnica.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pruebatecnica.entitys.Ciudad;

public interface CiudadDAO extends JpaRepository<Ciudad,Long>{

}
