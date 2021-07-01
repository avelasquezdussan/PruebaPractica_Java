package com.example.pruebatecnica.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pruebatecnica.entitys.Persona;

public interface PersonaDAO extends JpaRepository<Persona,Long>{

}
